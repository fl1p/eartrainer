import React from 'react'

import Challenge from '../Challenge/Challenge'
import Answer from '../Answer/Answer'
import classes from './Content.css'

const Content = props => (
    <div className={classes.Content}>
        <Challenge/>
        <Answer/>
    </div>
)

export default Content
