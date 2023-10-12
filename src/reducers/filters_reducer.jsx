import { LOAD_PRODUCTS, UPDATE_SORT, UPDATE_PRODUCTS } from "./actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = state.allProducts.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filtered_products: action.payload,
      allProducts: action.payload,
      maxPrice,
    };
  }
  if(action.type === UPDATE_PRODUCTS){
      let sortedItems = state.filtered_products.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
      return {...state, filtered_products: sortedItems}
  }
  if (action.type === UPDATE_SORT) {
    const { filtered_products } = state;
    const { payload } = action;
    let tempProducts = [];
    if (payload === "Least Expensive") {
      tempProducts = filtered_products.sort((a, b) => a.price - b.price);
    }
    if (payload === "The Most Expensive") {
      tempProducts = filtered_products.sort((a, b) => b.price - a.price);
    }
    if (payload === "From A - Z") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (payload === "From Z - A") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if(payload === 'The Most Exclusive'){
      const products = filtered_products.sort((a, b) => b.price - a.price);
      tempProducts = products.slice(0,1);
      console.log(tempProducts);
    }
    return { ...state, filtered_products: tempProducts, sort: payload };
  }
};
export default filter_reducer;
