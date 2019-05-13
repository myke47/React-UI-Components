import React from 'react';
import './Button.css';

// - Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.

const ActionButton = props => {
    return (
        <button className={`action-button ${props.className}`}>
            {props.text}
        </button>
    );
};

export default ActionButton;