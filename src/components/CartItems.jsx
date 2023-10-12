import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router";
import { FaPlus, FaMinus } from "react-icons/fa";
import {formatPrice} from '../utils/helper_functions';
import { FaTrash } from "react-icons/fa";

const CartItems = () => {
  const navigate = useNavigate();
  const { cart,deleteItem,changeAmount } = useCartContext();
  if (cart.length === 0) {
    setTimeout(() => {
      navigate("/products");
    }, 2000);
    return <h3 className="empty-cart">No Items Available, Time to fill it</h3>;
  }
  const decreaseAmount = (id) => {
    changeAmount(id,'dec')
  }
  const increaseAmount = (id) => {
    changeAmount(id,'inc')
  }
  return (
    <div className="cart-container">
      {cart.map((item)=>{
      const trimmedString = item.description.substr(0,250);
        return (
          <article className="cart-item" key={item.id}>
            <img src={item.image} alt="" />
            <button className="btn cart-delete-btn" onClick={()=>deleteItem(item.id)}><FaTrash/></button>
            <p className="cart-description">
              {trimmedString}...
            </p>
            <div className="cart-item-info">
              <h5>Name: {item.name}</h5>
              <div>
                <h5>Amount: {item.amount} </h5>
                <button className="btn" onClick={()=>increaseAmount(item.id)}>
                  <FaPlus />
                </button>
                <button className="btn" onClick={()=>decreaseAmount(item.id)}>
                  <FaMinus />
                </button>
              </div>
              <h5>Price: {formatPrice(item.price)}</h5>
              <h5>Price Total: {formatPrice(item.price * item.amount)}</h5>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default CartItems;
