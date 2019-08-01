import React from 'react'
import { Link } from 'react-router-dom'
import '../Results/Results.css'

const Results = (props) => {
    const iTunes = props.iTunes.filter(track => {
        return (
            props.artist.toLowerCase().split(' ').join('')
            ===
            track.artistName.toLowerCase().split(' ').join('')
        )
    })

    return (
        <div className='results'>
            <h2>{props.artist.toUpperCase()} - {props.song.toUpperCase()}</h2>

            { props.lyrics.length ?
                <p>{props.lyrics}</p>
                :
                <p>No Lyrics Found</p> 
            }

            {iTunes.length > 0 ?
                <audio controls>
                    <source src={iTunes[0].previewUrl} type='audio/mp3' />
                </audio>
                :
                <p>Preview Not Found</p>
            }

            <div id="buttons">
                <Link to='/'><button>Get Other Song</button></Link>
            </div>
        </div>
    )
}

export default Results