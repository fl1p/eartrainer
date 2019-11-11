// TODO
// * Improve the sound with an envelope and in the future provide several optiosn incl. samples
import React from 'react';

const intervalPlayer = props => {
    // console.log('[IntervalPlayer]');
    // console.log(props);
    playInterval(props.first, props.second, 1000);

    return (
        <button> PLAY </button>
    );
}

// QUESTION: Where should code like that go?
// One the one hand this component is small and there is no reuse of this code in sight, so it could just stay here
// On the other probably more and more player functions will be coming up so a playerHelper could be an option if that
// is good practice in React? 
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playInterval= (first, second, duration) => {
    let oscillator = playNote(first);

    setTimeout(() => {
        oscillator.stop();

        setTimeout(() => {
            oscillator = playNote(second);

            setTimeout(() => {
                oscillator.stop();
            }, duration);
        }, duration);
    }, duration);
}

const playNote = (freq) => {
    let osc = audioCtx.createOscillator();

    osc.type = 'sine';
    osc.frequency.value = freq; // value in hertz
    osc.connect(audioCtx.destination);

    osc.start();
    
    return osc;
}

export default intervalPlayer;
