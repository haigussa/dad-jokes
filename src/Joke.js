import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    render() {
        return (
            <div className="Joke">
                <li>
                    <i className='far fa-arrow-alt-circle-up' onClick={this.props.voteUp}></i>
                    <div className="voteValue">

                    {this.props.voting}
                    </div>
                    <i className='far fa-arrow-alt-circle-down' onClick={this.props.voteDown}></i>
                    <span>
                        {this.props.joke}
                    </span>
                </li>
            </div>
        )
    }
}

export default Joke
