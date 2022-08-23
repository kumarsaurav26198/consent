import { combineReducers } from "redux";
import { campaignReducer } from "./campaignReducer";
import { consentReduser } from "./consentReduser";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  consentList: consentReduser,
  campaignList: campaignReducer,
});
export default reducers;
