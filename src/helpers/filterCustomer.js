
export const filterCustomer = (dni, state) => {
        
        return state.filter(customer => customer.dni === Number(dni));
            
    
}


export const getnextId = (state) => Math.max(...state.map(item => item.dni ))


