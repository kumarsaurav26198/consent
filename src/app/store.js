import { configureStore } from "@reduxjs/toolkit";
import reducers from "../redux/reducers";
import consentSaga from "../redux/reducers/consentSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: reducers,
  middleware: () => [sagaMiddleware]
});
sagaMiddleware.run(consentSaga);
