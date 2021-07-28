import React from 'react'
import PropTypes from 'prop-types'
import FormCustomer from '../Forms/FormCustomer'
import { useParams } from 'react-router-dom';
import AppFrame from '../AppFrame.js/AppFrame';
import { useFetchCustomers } from '../../Hooks/useFetchCustomers';
import { useSelector } from 'react-redux';

const CustomerEdit = () => {
    
    const {dni} = useParams();
    const {customers} = useSelector(state => state.customers);
    useFetchCustomers(customers);

    return (
        <div>
            <AppFrame
            header="Editar Cliente"
            center="center"
            body={<FormCustomer dni={dni}/>}
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
