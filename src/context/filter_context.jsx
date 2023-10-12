import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filters_reducer";
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  UPDATE_PRODUCTS,
} from "../reducers/actions";
import { productsURL2 as url } from "../utils/constants";
import { useProductsContext } from "./products_context";

const initialState = {
   allProducts:[],
   filtered_products:[],
   filtered_productsID:[],
   loading:false,
   sort:'From A - Z',
   maxPrice:0,
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const {allProducts} = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const sortProducts = (e) => {
    const value = e.target.value;
    dispatch({type:UPDATE_SORT,payload:value})
  }
  const updateProducts = () => {
     if (state.filtered_products.length > 0 && state.sort === "From A - Z") {
       dispatch({ type: UPDATE_PRODUCTS });
     }
  }
  
  useEffect(() => {
    dispatch({type:LOAD_PRODUCTS,payload:allProducts});
    updateProducts();
  }, [allProducts,state.filtered_products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sortProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
