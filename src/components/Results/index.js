import React from 'react';
import { Link } from 'react-router-dom';
import ITunes from '../ITunes';
import Lyrics from '../Lyrics';
import ArtistAndSong from '../ArtistAndSong';
import './Results.css';

const Results = (props) => {

    const iTunes = props.iTunes.filter(track => {
        return (
            props.artist.toLowerCase().split(' ').join('')
            ===
            track.artistName.toLowerCase().split(' ').join('')
        );
    });

    const setLocalStorage = () => {
        if (props.artist.length > 0 && props.song.length > 0) {
            localStorage.setItem('artist', props.artist);
            localStorage.setItem('song', props.song);
            localStorage.setItem('lyrics', props.lyrics);
            localStorage.setItem('itunes', JSON.stringify(iTunes));
        };
    };
    setLocalStorage();

    const songPreview = JSON.parse(localStorage.getItem('itunes'));
    const artist = localStorage.getItem('artist');
    const song = localStorage.getItem('song');
    const lyrics = localStorage.getItem('lyrics');

    return (
        <div className="results">
            <ArtistAndSong iTunes={songPreview} artist={artist} song={song} />
            <Lyrics lyrics={lyrics} />
            <ITunes iTunes={songPreview} />
            <Link to='/'><button>Get Other Song</button></Link>
        </div>
    );
};

export default Results;
