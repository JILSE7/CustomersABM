import { types } from "../types"

//ACTIONS
const fetchDataCustomer = (payload) => ({type: types.fetchCostumers, payload});
export const setCustomerStore = (payload) => ({type:types.setCustomer, payload})
const putCustomerStore = (payload) => ({type:types.putCustomer})

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


export const putCustomer = (id, obj) => {
    return async(dispatch) => {
        try {
                const resp = await fetch(`http://localhost:3001/customers/${id}`,
                {
                    method:'PUT',
                    body: JSON.stringify(obj),
                    headers: {
                        "Content-type" : 'application/json'
                    }
                }
                );
                dispatch(putCustomerStore());
                dispatch(getCustomers());
                console.log(resp);
        } catch (error) {
            console.log(error);
        }   
    }
}


