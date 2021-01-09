import React from 'react'

import './input.less'

const Input = React.forwardRef((props, ref) => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    const direction = props.dir || 'end'
    return (
        <React.Fragment>
            {direction === 'end' ? null : <label htmlFor={htmlFor} className="range__label">{props.label}</label>}
            <input
                id={htmlFor}
                name={props.name}
                type={props.type}
                defaultValue={props.value}
                min={props.min}
                placeholder={props.placeholder}
                checked={props.checked}
                defaultChecked={props.defaultChecked}
                onChange={props.onChange}
                className={props.className}
                ref={ref}
            >
            </input>
            {direction === 'end' ? <label htmlFor={htmlFor} className="range__label">{props.label}</label> : null}
            {/* <label htmlFor={htmlFor}>{props.label}</label> */}
        </React.Fragment>
    )
})

export default Input
