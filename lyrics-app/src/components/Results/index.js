import React from 'react'
import { Link } from 'react-router-dom'
import '../Results/Results.css'

const Results = (props) => {
    return (
        <div className='results'>
            <h2>{props.artist.toUpperCase()} - {props.song.toUpperCase()}</h2>
            <p>{props.lyrics}</p>
            <div id="buttons">
                <Link to='/'><button>Get other Song</button></Link>
            </div>
        </div>
    )
}

export default Results