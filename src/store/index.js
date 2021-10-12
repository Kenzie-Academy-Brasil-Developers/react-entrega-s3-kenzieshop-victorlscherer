import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// importar os reducers
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";


const reducers = combineReducers({
    //colocar os reducers ex: products: productsReducers,
    products: productsReducer,
    cart: cartReducer,


});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;