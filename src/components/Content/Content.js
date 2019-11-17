import React, { Component } from 'react'

import Challenge from '../Challenge/Challenge';
import Answer from '../Answer/Answer';

import { NOTES, INTERVALS } from '../../constants/music';
import classes from './Content.css';

const createChallenges = () => {
    const challenges = [];

    const randomIndex = (n) => {
        return Math.floor(Math.random() * Math.floor(n));
    };

    const calculateIntervalFreq = (rootFreq, halfSteps) => {
        return +(rootFreq * Math.pow(Math.pow(2, 1 / 12), halfSteps)).toFixed(2);
    };

    // select random root note
    for (let i = 0; i < 10; i++) {
        challenges.push(NOTES[randomIndex(NOTES.length)].freq)
    }

    return challenges.map((freq, i) => {

        // select random interval
        let ival = INTERVALS[randomIndex(INTERVALS.length)]

        return {
            id: i,
            name: ival.name,
            rootFreq: freq,
            iValFreq: calculateIntervalFreq(freq, ival.halfSteps) 
        }
    })
};

class Content extends Component {
    challenges = createChallenges();
    
    state = {
        currentChallengeId: 0,
    };

    answerHandler = answerName => {
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
        return (
            <div className={classes.Content}>
                <Challenge challenge={this.challenges[this.state.currentChallengeId]}/>
                <Answer options={INTERVALS}
                    answerHandler={this.answerHandler}/>
            </div>
        )
    };
}

export default Content;
