import { applyMiddleware, combineReducers, createStore } from "redux";
import ProductReducer from "./products_reducer";
import { fetchInitialState } from "../asyncFunctions/asyncActions";
import thunk from "redux-thunk";


let reducers = combineReducers({
    products: ProductReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(fetchInitialState());

export default store;