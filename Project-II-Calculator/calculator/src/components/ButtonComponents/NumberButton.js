import React from 'react';
import './Button.css';

// Create a `<NumberButton />` component that can accept `props` and display any number/symbol passed down as `text`.
//   - Example your component should be able to render a dynamic prop called text:
//   - Your button button should also be able to accept dynamic props `buttonStyle` for styling

// ```js
// <button className={props.buttonStyle}>{props.text}</button>
// ```

const NumberButton = props => {
    return (
        <button className={`number-button ${props.bgColor}`}>{props.text}</button>
    );
};

export default NumberButton;