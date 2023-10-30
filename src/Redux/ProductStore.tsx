import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import productSaga from "./ProductSaga";
import userReducer from "./ProductReducer";
const rootReducer = combineReducers({ userReducer });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(productSaga);

export default store;