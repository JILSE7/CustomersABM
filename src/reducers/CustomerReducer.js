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
         case types.putCustomer:
                console.log(action.payload);
         return state;
        default:
            return state;
    }
}