import React from 'react'
import PropTypes from 'prop-types'

const CustomerData = ({name, dni, age}) => {
    return (
        <div>
                <div className="customer-data">
                    <h2>Datos del cliente</h2>
                    <p><strong>Nombre</strong>{name}</p>
                    <p><strong>Nombre</strong>{dni}</p>
                    <p><strong>Nombre</strong>{age}</p>
                </div>
        </div>
    )
}

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,

}

export default CustomerData
