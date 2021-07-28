import React, {useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { putCustomer } from '../../actions/actions';
import { useForm } from '../../Hooks/useForm';



export const FormCustomer = ({dni:id}) => {
  const history = useHistory();
  const {setCustomer} = useSelector(state => state.customers);
  let local;
  const dispatch = useDispatch();
    if(setCustomer.name === undefined)local  = JSON.parse(localStorage.getItem('us'));
    const [values, handleInputChange] = useForm((setCustomer.name === undefined) ? local : setCustomer);
    const [error, seterror] = useState();
    const [alert, setalert] = useState(false);
    const { name, dni, age} = values;

    //Botones
    const goBack = () => history.goBack();
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(name, dni,age);
        if(!name  || !dni || !age){ 
          setalert(true)
          seterror(true)
          return;
        }else{
          setalert(true)
          seterror(false)
        }

        dispatch(putCustomer(dni, values));

        setTimeout(() => {
          history.push('/customers')
          
        }, 800);

    }
    return (
        <div className="_ Form">
        
         <Form onSubmit={handlerSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Name Customer</label>
                      <input type="text" className="form-control text-center" id="name" name="name" value={name} onChange={handleInputChange}/>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">DNI Customer</label>
                      <input type="text" disabled className="form-control text-center" name="dni" value={dni} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Age</label>
                      <input type="number" className="form-control text-center" name="age" value={age} onChange={handleInputChange} />
                  </div>
 
  
                    <button type="submit"  className="btn btn-success mt-3">Terminar Edicion</button>
        

                    {alert && error && <p className="animate__animated animate__pulse alert alert-danger mt-4">Campos Vacios verifiquelos porfavor</p>}
                    {alert && !error && <p className="animate__animated animate__pulse alert alert-success mt-4">Bien Hecho</p>}
          </Form>

          <br/>
          <button onClick={goBack}  className="btn btn-dark">Cancelar</button>
        </div>
    )
}

export default FormCustomer
