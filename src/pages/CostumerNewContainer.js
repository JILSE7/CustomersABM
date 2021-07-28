import React from 'react'
import AppFrame from '../components/AppFrame.js/AppFrame'
import FormNewCustomer from '../components/Forms/FormNewCustomer'

const CostumerNewContainer = () => {
    return (
        <div>
            <AppFrame
                header={"New Customer"}
                center='center'
                body={
                    <FormNewCustomer />
                }
            />
        </div>
    )
}

export default CostumerNewContainer
