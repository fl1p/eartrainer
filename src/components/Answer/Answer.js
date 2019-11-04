import React from 'react'
import classes from './Answer.css'

const answer = props => {
    console.log(props)

    return (
        <div className={classes.Answer}>
            <p> What is your answer? </p>
            { 
                props.challenges.map(answer => {
                    return (
                        <button key={answer.id}
                            onClick={() => props.answerHandler(props.challenge.id, answer.id)}>
                            {answer.content} 
                        </button>
                    )
                })
            }
        </div>
    )

}

export default answer
