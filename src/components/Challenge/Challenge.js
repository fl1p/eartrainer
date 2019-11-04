import React from 'react'
import classes from './Challenge.css'

const challenge = props => {
    return (
        <div className={classes.Challenge}>
            <h2> Challenge {props.challenge.id} </h2>
            <p> Playing sound:{props.challenge.content} </p>
        </div>
    )
}

export default challenge
