import React from 'react'
import '../Input/Input.css'


const Input = (props) => {
    return (
        <input required type='text' placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange}/>
    )
}

export default Input