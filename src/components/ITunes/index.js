import React from 'react';
import './ITunes.css';

const ITunes = (props) => {
    return (
        <div id="itunes">
            {props.iTunes.length > 0 ?
                <audio controls>
                    <source src={props.iTunes[0].previewUrl} type="audio/mp3" />
                </audio>
                :
                <p>Preview Not Found</p>
            }
        </div>
    );
};

export default ITunes;
