import React from 'react';

const Keyboard = () => {
    let array = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'];
    return (
        <div id={'keyboard'}>
            {array.map(el => (
                <button>{el}</button>
            ))}
        </div>
    );
};

export default Keyboard;