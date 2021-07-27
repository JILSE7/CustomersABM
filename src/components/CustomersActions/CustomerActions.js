import React from 'react'
import PropTypes from 'prop-types'

const CustomerActions = ({children}) => {
    return (
        <div>
            <div className="customers-actions">
                        {children}
            </div>
        </div>
    )
}

CustomerActions.propTypes = {
    children: PropTypes.node,
}

export default CustomerActions
