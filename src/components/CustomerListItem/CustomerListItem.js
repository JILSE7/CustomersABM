import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import { setCustomerStore } from '../../actions/actions';
import { useDispatch } from 'react-redux';


const CustomerListItem = ({name, editAction, delAction, url, dni,age, index}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handlerCustomer = () => history.push(`${url}${dni}`);

    const handlerEdit = () => {
        dispatch(setCustomerStore({id: dni, name, dni, age}));
        localStorage.setItem('us',JSON.stringify( {name,  dni, age}))
        history.push(`${url}${dni}/edit`)
        ;}

    const handlerDelete = () => history.push(`${url}${dni}/delet`);

    return (

                    <>
                        <tr>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center lh-5">{dni}</td>
                        <td className="text-center"> <button className="btn btn-outline-dark"  onClick={handlerCustomer}>{name}</button></td>
                            <td className="text-center">  <button className="btn btn-warning" onClick={handlerEdit}>{editAction}</button></td>    
                            <td className="text-center"><button className="btn btn-danger" onClick={handlerDelete}>{delAction}</button></td>    
                        </tr>
                        </>
    )
}

CustomerListItem.propTypes =  {
    name: PropTypes.string,
    editAction: PropTypes.string,
    delAction: PropTypes.string,
    url: PropTypes.string,
}


export default CustomerListItem
