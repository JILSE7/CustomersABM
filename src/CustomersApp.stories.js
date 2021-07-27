import React from 'react';
import  CustomersApp from './CustomersApp';
import AppFrame from './components/AppFrame.js/AppFrame'


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "CustomersApp",
    component: CustomersApp
}
export const WelcomScreenStorie = () => {
    return (
        <div>
            <AppFrame header={'Customers App'}/>
        </div>
    )
}