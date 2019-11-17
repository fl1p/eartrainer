import React from 'react';

import IntervalPlayer from './IntervalPlayer/IntervalPlayer';
import classes from './Challenge.css';

const challenge = props => (
    <div className={classes.Challenge}>
        <h2> Challenge {props.challenge.id} </h2>
        <IntervalPlayer
            first={props.challenge.rootFreq}
            second={props.challenge.iValFreq}/>
    </div>
);

export default challenge;
