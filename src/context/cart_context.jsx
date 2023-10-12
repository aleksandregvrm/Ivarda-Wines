import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { useProductsContext } from "./products_context";
import { ADD_TO_CART, DELETE_ITEM, CLEAR_CART, CHANGE_AMOUNT, CALCULATE_TOTALS } from "../reducers/actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items_price: 0,
  total_amount: 0,
  shipping_fee: [399, 0],
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };
  const deleteItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: { id } });
  };
  const clearCart = () => {
    dispatch({type: CLEAR_CART});
  };
  const changeAmount = (id,value) => {
    dispatch({type: CHANGE_AMOUNT,payload:{id,value}})
  }
  useEffect(()=>{
   localStorage.setItem("cart", JSON.stringify(state.cart));
   dispatch({type: CALCULATE_TOTALS})
  },[state.cart])
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        deleteItem,
        clearCart,
        changeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
