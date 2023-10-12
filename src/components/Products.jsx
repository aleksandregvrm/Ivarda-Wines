import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper_functions";
// import darkBottle from "../media/bottles_in_dark.jpg";
// import lightBottle from "../media/bottles_in_light.jpg";
// import lightBottle2 from "../media/bottles_in_light2.jpg";
// import lightBottle3 from "../media/bottles_in_light3.jpg";
// import ivarda_Logo from "../media/ivarda_logo2.jpg";
// import redWine from "../media/red_wine.png";
// import qvevri_wine from "../media/qvevri_wine.png";

const Products = () => {
  const { filtered_products: products, loading } = useFilterContext();
  // const imageArr = [
  //   darkBottle,
  //   lightBottle,
  //   lightBottle2,
  //   lightBottle3,
  //   ivarda_Logo,
  //   redWine,
  //   qvevri_wine,
  // ];

  // if(products.length === 0){
  //     return <div className="products-container section-center">
  //         <h3>No products found, please refresh the page</h3>
  //     </div>
  // }
  if (loading) {
    return (
      <div className="products-container section-center">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="products-container section-center">
      {/* {products.map((item, index) => {
        return (
          <article key={item.id} className="product">
            <h4>{item.name}</h4>
            <img src={imageArr[index % 8]} alt="" />
            <div className="underline-small"></div>
            <p>{formatPrice(item.price)}</p>
            <p className="brief-text">Amount: {item.stock}</p>
            <Link to={`/products/${item.id}`}>
              <button className="btn">Buy now</button>
            </Link>
          </article>
        );
      })} */}
    </div>
  );
};
export default Products;
