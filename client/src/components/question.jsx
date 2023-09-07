import React from 'react';
import appJsx from '../appJsx.css';

export default function Question (props) {

    // const { value, onUpdateValue } = props;

    // const handleButtonClick = () => {
    //   // Simulate an update and call the callback function
    //   const updatedValue = value + 1;
    //   onUpdateValue(updatedValue);
    // };
    const answerOptions = [props.quiz.correct_answer, ...props.quiz.incorrect_answers];
    console.log('answers', answerOptions);
    

return(
    <>
    <div>
    {/* {!props.question ? <p>Loading ...</p> : <p>{props.question}</p>} */}
    <p>{props.quiz.question}</p>
    {answerOptions.map((item) => (
      <button className="buttons">{item}</button>
    ))}
    {/* <p>{props.quiz.correct_answer}</p>
    <p>{props.quiz.incorrect_answers[0]}</p>
    <p>{props.quiz.incorrect_answers[1]}</p>
    <p>{props.quiz.incorrect_answers[2]}</p> */}
    </div>
        {/* {props.answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" /> {answer}
            </label>
          </li>
        ))} */}
      

    {/* <h6>{props.correct}</h6>
    <h6>{props.incorrect[0]}</h6>
    <button onClick={handleButtonClick}>Increment Value</button> */}
    </>
);
}

//investigate a little how you can create 
//a checkbox in your return function in your component to show your options to answer