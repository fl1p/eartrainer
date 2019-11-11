import React, { Component } from 'react'

import Challenge from '../Challenge/Challenge'
import Answer from '../Answer/Answer'

import { NOTES, INTERVALS } from '../../constants/music' 
import classes from './Content.css'

// QUESTION: Where are variables that are declared outside the component scoped to?

const randomIndex = (n) => {
    return Math.floor(Math.random() * Math.floor(n));
}

const createChallenges = () => {
    const challenges = [];

    for (let i = 0; i < 10; i++) {
        challenges.push(NOTES[randomIndex(NOTES.length)].freq)
    }

    return challenges.map((freq, i) => {
        let ival = INTERVALS[randomIndex(INTERVALS.length)]
        return {
            id: i,
            name: ival.name,
            rootFreq: freq,
            iValFreq: calculateIntervalFreq(freq, ival.halfSteps) 
        }
    })
};

const calculateIntervalFreq = (rootFreq, halfSteps) => {
    return +(rootFreq * Math.pow(Math.pow(2, 1 / 12), halfSteps)).toFixed(2);
};

class Content extends Component {
    challenges = createChallenges();
    
    state = {
        currentChallengeId: 0,
    };

    answerClickHandler = answerName => {
        if (answerName === this.challenges[this.state.currentChallengeId].name) {
            alert('Correct');
        } else {
            alert('Fail!');
        }

        this.setState({
            currentChallengeId: this.state.currentChallengeId + 1
        });
    };

    render() {
        console.log('[Content]');
        console.log(this.challenges);


        return (
            <div className={classes.Content}>
                <Challenge challenge={this.challenges[this.state.currentChallengeId]}/>
                <Answer options={INTERVALS}
                    answerHandler={this.answerClickHandler}/>
            </div>
        )
    };
}

export default Content;
