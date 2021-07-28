import React from 'react'
import PropTypes from 'prop-types'
import FormCustomer from '../Forms/FormEditCustomer'
import AppFrame from '../AppFrame.js/AppFrame';
import { useFetchCustomers } from '../../Hooks/useFetchCustomers';
import { useSelector } from 'react-redux';

const CustomerEdit = () => {
    
    const {customers} = useSelector(state => state.customers);
    useFetchCustomers(customers);

    return (
        <div>
            <AppFrame
            header="Editar Cliente"
            center="center"
            body={<FormCustomer disabled = {true}/>}
            />
        </div>
    )
}

CustomerEdit.propTypes = {
name: PropTypes.string,     
dni: PropTypes.string,  
age: PropTypes.string,  
}

export default CustomerEdit
