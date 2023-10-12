import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useAuthContext } from "../context/user_context";

const CartButtons = () => {
  const { myUser,loginWithRedirect,logout } = useAuthContext();
  const { closeSidebar } = useProductsContext();
  const { total_amount } = useCartContext();

  return (
    <div className="cart-buttons">
      <Link to="cart">
        <button className="btn" onClick={closeSidebar}>
          <FaShoppingCart />
          <span>{total_amount}</span>
        </button>
      </Link>
      {myUser ? (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="btn"
        >
          Log out
          <FaUserMinus />
        </button>
      ) : (
        <button className="btn" onClick={loginWithRedirect}>
          Log in <FaUserPlus />
        </button>
      )}
    </div>
  );
};
export default CartButtons;
