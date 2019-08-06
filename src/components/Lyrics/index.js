import React from 'react';
import './Lyrics.css';

const Lyrics = (props) => {
    return (
        <div id="lyrics">
            {props.lyrics ?
                <ul>{
                    props.lyrics.split('\n').map((line, index) => {
                        return <li key={index}>{line}</li>;
                    })}
                </ul>
                :
                <p>No Lyrics Found</p>
            }
        </div>
    );
};

export default Lyrics;
