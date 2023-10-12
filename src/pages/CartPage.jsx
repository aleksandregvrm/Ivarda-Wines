import {CartItems, CartTotals} from '../components'
import { useCartContext } from '../context/cart_context';

const CartPage = () => {
  const {clearCart} = useCartContext();
  return (
    <section className="cart">
        <div className="section-center cart-center">
            <h2>Cart</h2>
            <div className="underline"></div>
            <CartItems/>
        </div>
        <div className="clear-container">
        <button className="btn clear-btn" onClick={clearCart}>Clear Cart</button>
        </div>
        <CartTotals/>    
    </section>
  );
};

export default CartPage