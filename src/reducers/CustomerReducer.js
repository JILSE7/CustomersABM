import { types } from "../types";



export const CustomerReducer = (state = [],  action) => {
    switch (action.type) {
        case types.fetchCostumers:
            console.log(action);
            return [...action.payload];
    
        default:
            return state;
    }
}