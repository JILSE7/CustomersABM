import { types } from "../types";



export const CustomerReducer = (state = {
    customers: [],
    setCustomer: {}
},  action) => {
    switch (action.type) {
        case types.fetchCostumers:
            
            return {...state,customers:[...action.payload]};
        case types.setCustomer:
            return {...state,setCustomer:{...action.payload}};
                
        default:
            return state;
    }
}