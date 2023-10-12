import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { singleProductURL } from "../utils/constants";
import { ProductImages, SinglePageButtons } from "../components";
import { formatPrice } from "../utils/helper_functions";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleData,
    single_product: product,
    single_product_error: error,
    single_product_loading: loading,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleData(`${singleProductURL}${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error]);
  if (loading) {
    return (
      <div className="section-center single-center">
        <div className="loading"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="section-center single-center">
        <h4 className="single-error">There has been a major error...</h4>
      </div>
    );
  }
  const { stock, company, name, description, category, price, images, } = product;
  console.log(product);
  return (
    <section className="single-product-section">
      <div className="section-center single-center">
        <div className="single-img-container">
          <ProductImages images={images} />
        </div>
        <div className="single-info">
          <h2 className="single-header">{name}</h2>
          <div className="underline single-underline"></div>
          <p className="text">
           {description}
          </p>
          <h4 className="single-stat single-category">
               <span>Category: </span>{category}
          </h4>
          <h4 className="single-stat single-company">
            <span>Company: </span>
            {company}
          </h4>
          <h4 className="single-stat single-price">
            <span>Price: </span>{formatPrice(price)}
          </h4>
          <h4 className="single-stat single-amount">
            <span>Stock: </span>{stock}
          </h4>
          {stock ? <SinglePageButtons product={product} /> : null}
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
