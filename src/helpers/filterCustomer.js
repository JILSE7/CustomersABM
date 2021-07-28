
export const filterCustomer = (dni, state) => {
        
        return state.filter(customer => customer.dni === Number(dni));
            
    
}