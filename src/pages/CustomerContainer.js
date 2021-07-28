import React, { memo, } from 'react'
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AppFrame from '../components/AppFrame.js/AppFrame';
import { useCustomer } from '../Hooks/useCustomer';
import { useFetchCustomers } from '../Hooks/useFetchCustomers';


const CustomerContainer = memo(() => {
    const {dni} = useParams();
    const {customers} = useSelector(state => state.customers);
    useFetchCustomers(customers);
    const [customer] = useCustomer(dni,customers)

    
    return (
        <div>
            
            { customer && 
                 
               <AppFrame
                    header={`Datos del cliente `}
                    body={
                        <div>
                        <h3>Nombre: {customer.name}</h3>
                        <h4>Dni: {customer.dni}</h4>
                        <h4>Edad: {customer.Age}</h4>
                        </div>
                    }
                    ></AppFrame> 
            }
        </div>

        
    )
})

export default CustomerContainer
