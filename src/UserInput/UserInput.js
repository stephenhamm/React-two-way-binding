import React from 'react';
import './UserInput.css';

const userInput = ( props ) => {
    return (
        <input type="text" className="nameInput" onChange={props.changed} value={props.newName} />
    )
};

export default userInput;