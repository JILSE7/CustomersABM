import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataCustomer } from '../actions/actions';
import AppFrame from '../components/AppFrame.js/AppFrame'
import CustomerList from '../components/CustomerList/CustomerList'


const CostumerListContainer = () => {
    const customers = useSelector(state => state.customer);
    const dispatch = useDispatch();
    useEffect(() => {

        customers.length <= 0 && dispatch(fetchDataCustomer());
        
    }, [dispatch, customers])
    
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
