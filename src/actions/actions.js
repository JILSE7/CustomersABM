import { types } from "../types"

//ACTIONS
const fetchDataCustomer = (payload) => ({type: types.fetchCostumers, payload});
export const setCustomerStore = (payload) => ({type:types.setCustomer, payload})
const putCustomerStore = (payload) => ({type:types.putCustomer});
const postCustomerStore = () => ({type: types.postCustomer});

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
    const {age} = obj;
    return async(dispatch) => {
        try {
                const resp = await fetch(`http://localhost:3001/customers/${id}`,
                {
                    method:'PUT',
                    body: JSON.stringify({...obj, age: Number(age)}),
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
};


export const postCustomer = (payload) => {
    const {age} = payload;
    return async(dispatch) => {
        try {
            const resp = await fetch(`http://localhost:3001/customers`, {
                method: 'POST',
                body: JSON.stringify({...payload, age: Number(age)}),
                headers: {
                    "Content-type" : 'application/json'
                },
            }
            )
            
            if(resp.ok){
                dispatch(postCustomerStore());
                dispatch(getCustomers());
            }else{
                throw new Error('No se pudo crear el usuario');
            }
        } catch (error) {
            throw new Error('Error Interno');
        }

    }

}


