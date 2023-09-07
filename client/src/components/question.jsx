import React from 'react';

export default function Question (props) {

    // const { value, onUpdateValue } = props;

    // const handleButtonClick = () => {
    //   // Simulate an update and call the callback function
    //   const updatedValue = value + 1;
    //   onUpdateValue(updatedValue);
    // };

return(
    <>
    <p>{props.questions[0].question}</p>
    {/* <h6>{props.correct}</h6>
    <h6>{props.incorrect[0]}</h6>
    <button onClick={handleButtonClick}>Increment Value</button> */}
    </>
);
}