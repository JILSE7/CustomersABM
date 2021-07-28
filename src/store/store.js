import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { CustomerReducer } from '../reducers/CustomerReducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    customers:  CustomerReducer,
    
})


export const store = createStore( reducers,  
    //trabajr peticiones asincronas
   composeEnhancers(
    applyMiddleware(thunk)
   ))