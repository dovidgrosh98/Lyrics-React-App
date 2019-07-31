import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Axios from 'axios'
import Header from '../Header/'
import InputField from '../InputField/'
import Results from '../Results'
import Footer from '../Footer/'
import './Home.css'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            artistValue: '',
            songValue: '',
            artistName: '',
            songTitle: '',
            value: ''
        }
    }

    componentDidMount() {
        this.getLyrics()
    }

    getLyrics = async () => {
        const url = `https://api.lyrics.ovh/v1/${this.state.artistName}/${this.state.songTitle}`
        try {
            const data = await Axios.get(url)
            const { data: { lyrics } } = data
            await this.setState({ lyrics })
        }
        catch (error) {
            this.setState({ lyrics: 'No Lyrics Found' })
        }
    }

    // getAlbum = async () => {
    //     const apiKey = process.env.REACT_APP_API_KEY
    //     const url = `theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${this.state.artistName}`
    //     try {
    //         const data = await Axios.get(url)
    //         console.log(data)
    //         // const { data: { lyrics } } = data
    //         // await this.setState({ lyrics })
    //     }
    //     catch (error) {
    //         this.setState({ lyrics: 'No Lyrics Found' })
    //     }
    // }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    submitChange = async (evt) => {
        evt.preventDefault()
        await this.setState({
            artistName: this.state.artistValue,
            songTitle: this.state.songValue,
            artistValue: '',
            songValue: ''
        })
        // await this.getAlbum()
        await this.getLyrics()
        this.props.history.push('/results')
    }

    render() {
        return (
            <div id="home">
                <Header />
                <main>
                    <Switch>
                        <Route exact path='/' render={() =>
                            <InputField
                                onSubmit={this.submitChange}
                                handleChange={this.handleChange}
                                artistValue={this.state.artistValue}
                                songValue={this.state.songValue}
                            />} />
                        <Route path='/results' component={() =>
                            <Results
                                artist={this.state.artistName}
                                song={this.state.songTitle}
                                lyrics={this.state.lyrics}
                            />} />
                    </Switch>
                </main>
                <Footer artist={this.state.artistName} song={this.state.songTitle} lyrics={this.state.lyrics}/>
            </div>
        )
    }
}

export default withRouter(Home)