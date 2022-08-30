import { combineReducers } from "redux";
import { campaignReducer } from "./campaignReducer";
import { consentReducer } from "./consentReducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  consentList: consentReducer,
  campaignList: campaignReducer,
});
export default reducers;
