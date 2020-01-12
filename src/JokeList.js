import React, { Component } from 'react'
import axios from 'axios'
import Joke from './Joke'

class JokeList extends Component {
    static defaultProps = { num: 20 };
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
        this.handleVote = this.handleVote.bind(this)
    }
    async componentDidMount() {
        const API_URL = "https://icanhazdadjoke.com/"

        const jokes = []
        let i = 0;
        while (i < this.props.num) {
            let res = await axios.get(API_URL, { headers: { Accept: "application/json" } })
            console.log(res)
            jokes.push({ jokeText: res.data.joke, votes: 0, id: res.data.id })
            i++
        }
        console.log(jokes)
        this.setState({ jokes })
    }
    handleVote(id, change) {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(j => (j.id === id) ? { ...j, votes: j.votes + change } : j
            )
        }))

    }
    render() {
        const allJokes = this.state.jokes.map(j => <Joke key={j.id} id={j.id} joke={j.jokeText} voting={j.votes} voteUp={() => this.handleVote(j.id, 1)} voteDown={() => this.handleVote(j.id, -1)} />)
        return (
            <div>
                <h1>Dad Joke</h1>
                <ul>
                    {allJokes}
                </ul>
            </div>
        )
    }
}

export default JokeList
