import React from 'react';
import { CircleLoader } from 'react-spinners';
import Input from '../Input/';
import './InputField.css';

const InputField = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input
                value={props.artistValue}
                name="artistValue"
                placeholder="Artist Name"
                onChange={props.handleChange}
            />
            <Input
                value={props.songValue}
                name="songValue"
                placeholder="Song Title"
                onChange={props.handleChange}
            />
            <button>
                {!props.loading ?
                    'Get Lyrics' :
                    <CircleLoader
                        size={30}
                        color={'#F9F871'}
                        loading={props.loading}
                    />}
            </button>
        </form>
    );
};

export default InputField;
