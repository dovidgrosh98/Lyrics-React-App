import React from 'react'
import '../Footer/Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <h3>Song didn't appear? Try searching on YouTube</h3>
            <a href={`https://www.youtube.com/results?search_query=${props.artist}+${props.song}`} target="_">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/YouTube_social_white_squircle_%282017%29.svg/1024px-YouTube_social_white_squircle_%282017%29.svg.png' alt='youtube' />
            </a>
        </footer>
    )
}

export default Footer