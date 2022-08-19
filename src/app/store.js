import { configureStore } from "@reduxjs/toolkit";
import reducers from "../redux/reducers";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    reducers,
  },
});
