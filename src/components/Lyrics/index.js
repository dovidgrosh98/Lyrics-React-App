import React from 'react';
import './Lyrics.css';

const Lyrics = (props) => {
    return (
        <div id="lyrics">
            {props.lyrics ?
                <p>{props.lyrics}</p>
                :
                <p>No Lyrics Found</p>
            }
        </div>
    );
};

export default Lyrics;
