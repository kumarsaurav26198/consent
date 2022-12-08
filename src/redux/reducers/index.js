import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { campaignReducer } from "./campaignReducer";
import { consentReducer } from "./consentReducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  consentList: consentReducer,
  campaignList: campaignReducer,
  auth: authReducer,
});
export default reducers;
