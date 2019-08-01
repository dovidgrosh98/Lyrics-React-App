import React from 'react'
import './ArtistAndSong.css'

const ArtistAndSong = (props) => {
    return (
        <div id="artist-info">
            {props.iTunes.length > 0 ?
                <img src={props.iTunes[0].artworkUrl100} alt="album cover" />
                :
                ''
            }
            <h2>{props.artist.toUpperCase()} - {props.song.toUpperCase()}</h2>
        </div>
    )
}

export default ArtistAndSong