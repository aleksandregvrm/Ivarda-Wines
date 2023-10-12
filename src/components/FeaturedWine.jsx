import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helper_functions";

const FeaturedWine = () => {
  const { isLoading, featuredProduct, error } = useProductsContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (featuredProduct.length === 0) {
    return <div>No such items available</div>;
  }
  if (error) {
    return <div>There has been an error... refresh and try again </div>;
  }
  const { id, name, price, image, description } = featuredProduct;

  return (
    <div className="featured-wine">
      <h3>
        Todays featured wine is <br />
        <br />
        <span>{name}</span>
      </h3>
      <div className="featured-box"></div>
      <div className="featured-center section-center">
        <div className="featured-card" data-id={id}>
          <div className="card-image">
            <img src={image} alt={name} />
          </div>
          <div className="card-details">
            <h4>{name}</h4>
            <h5>Price: {formatPrice(price * 100)}</h5>
          </div>
          <Link to={`/products/${id}`}>
            <button className="btn card-btn">Buy Now</button>
          </Link>
        </div>
        {/* BIG SCREEN ONLY */}
        <div className="featured-text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWine;
