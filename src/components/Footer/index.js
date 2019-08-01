import React from 'react'
import '../Footer/Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <h3>Song didn't appear? Try searching on YouTube</h3>
            <a href={`https://www.youtube.com/results?search_query=${props.artist}+${props.song}`} target="_">
                <img src='https://res.cloudinary.com/dg98/image/upload/v1564686045/1024px-YouTube_social_white_squircle__282017_29.svg.png' alt='youtube' />
            </a>
        </footer>
    )
}

export default Footer