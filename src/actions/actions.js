import { types } from "../types"

const customers = [
{dni: 1 , name: 'said', age: '24'},
{dni: 2 , name: 'pepe', age: '24'},
{dni: 3 , name: 'carlos', age: '24'},
];
//ACTIONS
export const fetchDataCustomer = () => ({type: types.fetchCostumers, payload: customers});