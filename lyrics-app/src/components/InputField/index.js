import React from 'react'
import Input from '../Input/'
import '../InputField/InputField.css'

const InputField = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input value={props.artistValue} name="artistValue" placeholder="Artist Name" onChange={props.handleChange}/>
            <Input value={props.songValue} name="songValue" placeholder="Song Title" onChange={props.handleChange}/>
            <button>Get Lyrics</button>
        </form>
    )
}

export default InputField