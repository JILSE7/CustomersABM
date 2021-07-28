import { types } from "../types"

//ACTIONS
const fetchDataCustomer = (payload) => ({type: types.fetchCostumers, payload});
export const setCustomerStore = (payload) => ({type:types.setCustomer, payload})

export const getCustomers = () => {
    return async(dispatch) => {
        try {
                const customers = await (await fetch('http://localhost:3001/customers')).json()
                dispatch(fetchDataCustomer(customers));
        } catch (error) {
            console.log(error);
        }   
    }
}


