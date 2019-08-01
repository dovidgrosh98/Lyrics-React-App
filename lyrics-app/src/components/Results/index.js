import React from 'react'
import { Link } from 'react-router-dom'
import ITunes from '../ITunes'
import Lyrics from '../Lyrics'
import ArtistAndSong from '../ArtistAndSong'
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
            <ArtistAndSong artist={props.artist} song={props.song}/>
            <Lyrics lyrics={props.lyrics} />
            <ITunes iTunes={iTunes} />
            <Link to='/'><button>Get Other Song</button></Link>
        </div>
    )
}

export default Results