import React from 'react'
import './ArtistAndSong.css'

const ArtistAndSong = (props) => {
    return (
        <h2>{props.artist.toUpperCase()} - {props.song.toUpperCase()}</h2>
    )
}

export default ArtistAndSong