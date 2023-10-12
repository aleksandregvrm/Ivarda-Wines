import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router";

const SingleButtons = ({product}) => {
  const navigate = useNavigate()
  const {addToCart} = useCartContext();
  const {stock,id} = product;
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    if (amount < stock) {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };
  return (
    <div className="amount-buttons">
      <h4>Amount</h4>
      <div>
        <button className="btn" onClick={increaseAmount}>
          <FaPlus />
        </button>
        <h4>{amount}</h4>
        <button className="btn" onClick={decreaseAmount}>
          <FaMinus />
        </button>
      </div>
      <br />
      <button className="btn single-btn" disabled={!stock} onClick={()=>
        {addToCart(id,amount,product)
          navigate('/cart')
        }}>
        Add to cart
      </button>
    </div>
  );
};
export default SingleButtons;
