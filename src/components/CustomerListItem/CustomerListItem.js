import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'


const CustomerListItem = ({name, editAction, delAction, url, dni}) => {
    const history = useHistory();
    console.log(url, dni);
    const handlerCustomer = () => history.push(`${url}${dni}`);
    const handlerEdit = () => history.push(`${url}${dni}/edit`);
    const handlerDelete = () => history.push(`${url}${dni}/delet`);

    return (

                    <>
                        <tr>
                        <td className="text-center">{dni}</td>
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
