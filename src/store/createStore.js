import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from './reducers';
import { createLogger } from "redux-logger";
const log = createLogger({
    diff: true, collapsed: true
});
// a function that can create our store and persiste the data
export default (initialState = {}) => {

    //================================================
    // Middleware Configuaration
    //============================================
    const middleware = [thunk, log];
    //================================================
    // Store enhancers
    //============================================
    const enhancers = [];
    //================================================
    //Store Inatallation
    //============================================

    const store =   createStore (

        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )


    );
    return store;

}