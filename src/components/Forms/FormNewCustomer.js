import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postCustomer } from '../../actions/actions';
import { getnextId } from '../../helpers/filterCustomer';
import { useFetchCustomers } from '../../Hooks/useFetchCustomers';
import { useForm } from '../../Hooks/useForm';

const FormNewCustomer = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const {customers} = useSelector(state => state.customers);
    useFetchCustomers(customers);
    const [error, seterror] = useState();
    const [alert, setalert] = useState(false);
    const [values, handleInputChange] = useForm(); //custom hook
    const lastdni = getnextId(customers) ;
    
    const { name, age,dni} = values; //desestructurando el useform

    useEffect(() => console.log(values) , [values]); //viendo los campos

    //Agregar newClient
    const handlerSubmit = (e) => {
        e.preventDefault();

        if(!name  || !dni || !age){ 
            setalert(true)
            seterror(true)
            return;
          }else{
            setalert(true)
            seterror(false)
          }
  

        dispatch(postCustomer({...values, dni})); 

        setTimeout(() => history.push('/customers'), 800);
    }

    return (
        <div className="_ Form">
        
        <Form onSubmit={handlerSubmit} >
                 <div className="mb-3">
                     <label className="form-label">Name Customer</label>
                     <input type="text" className="form-control text-center" id="name" name="name" value={name} onChange={handleInputChange}/>
                 </div>
                 <div className="mb-3">
                     <label className="form-label">DNI Customer</label>
                     <input type="number" disabled className="form-control text-center" name="dni" value={dni} onChange={handleInputChange} />
                 </div>
                 <div className="mb-3">
                     <label className="form-label">Age</label>
                     <input type="number" className="form-control text-center" name="age" value={Number(age)} onChange={handleInputChange} />
                 </div>

 
                   <button type="submit"  className="btn btn-success mt-3">Agregar</button>
       

                   {alert && error && <p className="animate__animated animate__pulse alert alert-danger mt-4">Campos Vacios verifiquelos porfavor</p>}
                   {alert && !error && <p className="animate__animated animate__pulse alert alert-success mt-4">Bien Hecho</p>}
         </Form>

         <br/>
         <button onClick={() => console.log('hola')}  className="btn btn-dark">Cancelar</button>
       </div>
    )
}

export default FormNewCustomer
