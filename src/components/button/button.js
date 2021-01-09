import React from 'react'

import './button.less'

const Button = (props) => {
    return(
        <button
            onClick={props.onClick}
            className={props.className}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button 