// simple UI component that takes options (intervals)
// and a handler and shows buttons for the given options

import React from 'react'
import classes from './Answer.css'

const answer = props => (
    <div className={classes.Answer}>
        <p> What is your answer? </p>
        { props.options.map(answer => {
                return (
                    <button key={answer.name}
                        onClick={() => props.answerHandler(answer.name)}>
                        {answer.name} 
                    </button>
                )
            })
        }
    </div>
)

export default answer;
