import React from 'react'
import AppHeader from '../AppHeader/AppHeader';

import PropTypes from 'prop-types'

const AppFrame = ({header, body, footer, center}) => {
    return (
        
            <div className="text-center">
                        <AppHeader title={header}/>
                        <div className={center && center}>{body}</div>
                        <div>{"Aplicacion simple de ejemplo"}</div>
            </div>
            
    )
}
AppFrame.propTypes = {
    title: PropTypes.string,
    body: PropTypes.element.isRequired,
    
    }
export default AppFrame
