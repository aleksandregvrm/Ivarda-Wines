import { useState } from "react"
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helper_functions";
import { useAuthContext } from "../context/user_context";
import { Link } from "react-router-dom";
formatPrice

const CartTotals = () => {
  const {total_amount,total_items_price} = useCartContext();
    const {myUser,loginWithRedirect} = useAuthContext();
    return (
      <article className="cart-totals section-center">
        <div className="totals-text">
          <h4>Total Amount: {total_amount}</h4>
          <h4>Total Price: {formatPrice(total_items_price)}</h4>
          {myUser ? (
            <Link to='/checkout'>
            <button className="btn">Checkout</button>
            </Link>
          ) : (
            <button
              className="btn"
              onClick={loginWithRedirect}
            >
              Log In
            </button>
          )}
        </div>
      </article>
    );
}
export default CartTotals