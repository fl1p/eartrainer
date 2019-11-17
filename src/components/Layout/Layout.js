import React from 'react';
import classes from './Layout.css';

const layout = props => (
    <div className={classes.Layout}>
        <h1> earTrainer </h1>

        <nav>
            <a href='/'>ABOUT</a>
            <a href='/settings'>SETTINGS</a>
            <a href='/practice'>PRACTICE</a>
        </nav>

        <main>
            {props.children}
        </main>
    </div>
);

export default layout;