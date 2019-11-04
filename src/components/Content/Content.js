import React, { Component } from 'react'

import Challenge from '../Challenge/Challenge'
import Answer from '../Answer/Answer'
import classes from './Content.css'

const CHALLENGES = [
    {
        id: 0,
        content: 'Oktave'
    },
    {
        id: 1,
        content: 'Quinte'
    },
    {
        id: 2,
        content: 'Quarte'
    }
];
class Content extends Component {
    state = {
        challenges: CHALLENGES,
        currentChallengeId: 0,
    }

    answerClickHandler = (challengeId, answerId) => {
        console.log(challengeId, answerId)

        if (answerId === challengeId) {
            alert('Correct')
        } else {
            alert('Fail!')
        }

        this.setState({
            currentChallengeId: this.state.currentChallengeId + 1
        })
    }

    render() {
        return (
            <div className={classes.Content}>
                <Challenge challenge={CHALLENGES[this.state.currentChallengeId]}/>
                <Answer 
                    challenge={CHALLENGES[this.state.currentChallengeId]}
                    challenges={this.state.challenges}
                    answerHandler={this.answerClickHandler}/>
            </div>
        )
    }
}

export default Content
