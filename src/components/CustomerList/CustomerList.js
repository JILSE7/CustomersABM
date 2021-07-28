import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from '../CustomerListItem/CustomerListItem'
import { Table } from 'react-bootstrap';
import {BiEditAlt} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import {IoAccessibility} from 'react-icons/io5'
import {ImListNumbered} from 'react-icons/im'
import {FiDatabase} from 'react-icons/fi'


import { withRouter } from 'react-router-dom';


const CustomerList = ({customers, url, history}) => {
    
        
        const size = useMemo(() => ({fontSize: '24px'}), []);
    return (
        <>
                <div className="animate__animated animate__pulse">
                                    <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th className="text-center">{<ImListNumbered style={{...size, color: 'black'}}/>}</th>
                                        <th className="text-center">{<FiDatabase style={{...size, color: '#1E90FF'}}/>}</th>
                                        <th className="text-center">{<IoAccessibility style={{...size, color: 'gray'}}/>}</th>
                                        <th className="text-center">{<BiEditAlt style={{...size, color: 'orange'}}/>}</th>
                                        <th className="text-center">{<AiOutlineDelete style={{...size, color: 'red'}}/>}</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                    {
                        customers && 
                        customers.map((customer,i) => (
                            <CustomerListItem  key={customer.dni} index={i} dni={customer.dni} age={customer.age}  name={customer.name} editAction={'editar'} delAction={'eliminar'} url={url}  />
                        ))
                    }

                                      </tbody>
        
                                    </Table>
                </div>
                <div className="new-client">
                    <h3>Agregar nuevo Cliente</h3>
                    <div>
                    <button onClick={() => history.push('/customers/new')} className="btn btn-success" >Nuevo Cliente</button>
                    </div>
                </div>
        </>
    )
}

CustomerList.propTypes = {
customers: PropTypes.array.isRequired,
url: PropTypes.string.isRequired,
}

export default withRouter(CustomerList)
