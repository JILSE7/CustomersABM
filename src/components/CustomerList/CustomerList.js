import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from '../CustomerListItem/CustomerListItem'
import { Table } from 'react-bootstrap';
import {BiEditAlt} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import {IoAccessibility} from 'react-icons/io5'
import {ImListNumbered} from 'react-icons/im'


import { withRouter } from 'react-router-dom';


const CustomerList = ({customers, url, history}) => {
    
        
        const size = useMemo(() => ({fontSize: '24px'}), []);
    return (
        <div>
                <div>
                                    <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th className="text-center">{<ImListNumbered style={{...size, color: 'black'}}/>}</th>
                                        <th className="text-center">{<IoAccessibility style={{...size, color: 'gray'}}/>}</th>
                                        <th className="text-center">{<BiEditAlt style={{...size, color: 'orange'}}/>}</th>
                                        <th className="text-center">{<AiOutlineDelete style={{...size, color: 'red'}}/>}</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                    {
                        customers && 
                        customers.map(customer => (
                            <CustomerListItem  key={customer.dni} dni={customer.dni}  name={customer.name} editAction={'editar'} delAction={'eliminar'} url={url}  />
                        ))
                    }

                                      </tbody>
        
                                    </Table>
                </div>
                <div className="new-client">
                    <h3>Agregar nuevo Cliente</h3>
                    <div>
                    <button onClick={() => history.push(`${url}new`)} className="btn btn-success" >Nuevo Cliente</button>
                    </div>
                </div>
        </div>
    )
}

CustomerList.propTypes = {
customers: PropTypes.array.isRequired,
url: PropTypes.string.isRequired,
}

export default withRouter(CustomerList)
