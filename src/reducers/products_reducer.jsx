import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_LOADING,
  END_LOADING,
  SET_DATA,
  DISPLAY_ERROR,
  SINGLE_PRODUCT_BEGIN,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_ERROR
} from "./actions";

const products_reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === END_LOADING) {
    return { ...state, isLoading: false };
  }
  if(action.type === SET_DATA){ 
    const day = new Date().getDate();
    const featuredIndex = day % 4;
    
    return {...state, allProducts:action.payload,featuredProduct:action.payload[featuredIndex]}
  }
  if(action.type === DISPLAY_ERROR){
    return {...state,error:true}
  }
  if(action.type === SINGLE_PRODUCT_BEGIN){
    return {...state,single_product_loading:true}
  }
  if(action.type === SINGLE_PRODUCT_ERROR){
    return {...state,single_product_error:true,single_product_loading:false}
  }
  if(action.type === SINGLE_PRODUCT_SUCCESS){
    return {...state,single_product_loading:false,single_product:action.payload}
  }
};
export default products_reducer;
