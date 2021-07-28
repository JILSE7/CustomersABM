import { useEffect, useState } from "react"
import { filterCustomer } from "../helpers/filterCustomer";



export const useCustomer = (dni, state) => {
    
   const [customer, setCustomer] = useState({});
    useEffect(() => {
        setCustomer(filterCustomer(dni, state))        
    }, [dni,state]) 
    
    return [customer[0]];
 

}