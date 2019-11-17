import React from 'react';

const intervalPlayer = props => {
    playInterval(props.first, props.second, 1000);

    return (
        <button> PLAY </button>
    );
}

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
};

const playNote = (freq) => {
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();

    gain.gain.value = 0.1;
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.type = 'sine';
    osc.frequency.value = freq;

    osc.start();
    
    return osc;
};

export default intervalPlayer;
