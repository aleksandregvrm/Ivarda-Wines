import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/products_reducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR, SET_LOADING, END_LOADING, SET_DATA, DISPLAY_ERROR, SINGLE_PRODUCT_BEGIN,SINGLE_PRODUCT_ERROR,SINGLE_PRODUCT_SUCCESS } from "../reducers/actions";
import { productsURL2 as url } from "../utils/constants";

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  allProducts:[],
  featuredProduct:[],
  error:false,
  single_product_loading:false,
  single_product_error:false,
  single_product:[],
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const fetchData = async (url) => {
    dispatch({type: SET_LOADING});
    try {
      const response = await axios.get(url);
      dispatch({type:SET_DATA,payload:response.data})
      dispatch({type:END_LOADING})
    } catch (error) {
      dispatch({type:DISPLAY_ERROR})
      console.log(error.response);
    }
  };
  const fetchSingleData = async (url) => {
    dispatch({type: SINGLE_PRODUCT_BEGIN})
    try {
      const response = await axios.get(url);
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type:SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
