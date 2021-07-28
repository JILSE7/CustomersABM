import React from 'react'
import { useSelector } from 'react-redux';
import AppFrame from '../components/AppFrame.js/AppFrame'
import CustomerList from '../components/CustomerList/CustomerList'
import { useFetchCustomers } from '../Hooks/useFetchCustomers';


const CostumerListContainer = () => {
    const {customers} = useSelector(state => state.customers);
    useFetchCustomers(customers);
    return (
        <div>
                  <AppFrame
                    header={'Clientes'}
                    body={
                        <CustomerList customers = {customers} url={"customers/"}/>
                    }
                />
        </div>
    )
}

export default CostumerListContainer
