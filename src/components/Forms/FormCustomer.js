import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';



export const FormCustomer = () => {
    const {setCustomer} = useSelector(state => state.customers);
    const [values, handleInputChange] = useForm(setCustomer);
    const { name, dni, age} = values;

    useEffect(() => {
        console.log(values);
    }, [values])

    const handlerSubmit = (e) => {
        e.preventDefault();


    }
    return (
        <div className="_ Form">
        {
         <Form onSubmit={handlerSubmit}>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name Customer</label>
    <input type="text" class="form-control text-center" id="name" name="name" value={name} onChange={handleInputChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">DNI Customer</label>
    <input type="text" class="form-control text-center" name="dni" value={dni} onChange={handleInputChange} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age</label>
    <input type="number" class="form-control text-center" name="age" value={age} onChange={handleInputChange} />
  </div>
 
  
  <button type="submit"  className="btn btn-success">Terminar Edicion</button>
</Form>
        }
        </div>
    )
}

export default FormCustomer
