import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";

const Filters = () => {
  const navigate = useNavigate();
  const {sortProducts,allProducts} = useFilterContext();
  const randomID = allProducts.map((product)=>product.id);
  const randomize = (e) => {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * randomID.length);
    const randomProductsID = `/products/${randomID[randomNumber]}`
    navigate(randomProductsID);
  }
  return (
    <div className="filter-action">
      <form className="filter-form">
        <div className="filter-selection">
          <label htmlFor="selection">Filter By:</label>
          <select name="select" id="selection" onChange={sortProducts}>
            <option value="From A - Z">From A - Z</option>
            <option value="From Z - A">From Z - A</option>
            <option value="The Most Exclusive">The Most Exclusive</option>
            <option value="The Most Expensive">The Most Expensive</option>
            <option value="Least Expensive">Least Expensive</option>
          </select>
        </div>
        <br />
        <br />
        <div className="random-filter">
          <h5>Get the random choice</h5>
          <button className="btn random-btn" onClick={randomize}>Randomize</button>
        </div>
        <div className="read-filter">
          <p>
            If you are having trouble selecting, Maybe Reading More about
            georgian wine would help you make a better choice visit{" "}
            <span>
              <a
                target="_blank"
                href="http://www.georgianwinehouse.com/category/5/Education"
                className="filter-link"
              >
                Georgian Wine House
              </a>
            </span>
          </p>
        </div>
        <div className="note-filter">
          <h5>
            Note! all products get a free shipping if the shipping
            destination is within Tbilisi metropoliten area
          </h5>
          <br />
          <h5>Delivery Outside Tbilisi costs from 3.99$</h5>
        </div>
      </form>
    </div>
  );
};

export default Filters;
