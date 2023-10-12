import { Filters, Products } from "../components";
import { FaArrowUp } from "react-icons/fa";

const ProductsPage = () => {
  return (
    <section className="products-section">
      <div className="products-header" id="discover">
        <h2>Discover Our Products</h2>
        <div className="underline"></div>
      </div>
      <div className="filters">
        <Filters />
      </div>
      <div className="products">
        <Products />
      </div>
      <div className="scroll-up">
        <a href="#discover">
          <button className="btn">
            Scroll up <FaArrowUp />
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProductsPage;
