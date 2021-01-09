import React from 'react'

const Select = (props) => {
    const htmlFor = `${props.lebel}-${Math.random()}`
    return (
        <React.Fragment>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                className={props.className}
                defaultValue={props.default}
            >
                {
                    props.options.map((option, index)=>{
                        return(
                            <option
                                value={option.value}
                                key={option.value + index}
                            >
                                {option.text}
                            </option>
                        )
                    })
                }
            </select>
        </React.Fragment>
    )
}

export default Select