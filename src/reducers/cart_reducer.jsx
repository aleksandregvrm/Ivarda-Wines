import { ADD_TO_CART, DELETE_ITEM, CLEAR_CART, CHANGE_AMOUNT, CALCULATE_TOTALS } from "./actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempProduct = state.cart.find((i) => i.id === id);
    if (tempProduct) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
        description: product.description,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === DELETE_ITEM) {
    const tempItems = state.cart.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, cart: tempItems };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === CHANGE_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if(action.type === CALCULATE_TOTALS){
    const {totalAmount,totalPrice}  = state.cart.reduce((total,cartItem)=>{
      const {amount, price} = cartItem;
      total.totalAmount += amount;
      total.totalPrice += price * total.totalAmount;
      return total
    },{totalAmount:0,totalPrice:0})
    return {...state,total_items_price:totalPrice,total_amount:totalAmount}
  }
};
export default cart_reducer;
