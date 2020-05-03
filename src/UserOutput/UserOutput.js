import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div>
            <p className="name">My name is {props.name}.</p>
            <p>Change name by typing in the field below.</p>
        </div>       
    )
};

export default userOutput;