import React from 'react';
import appJsx from '../appJsx.css';

export default function Question (props) {

    // const { value, onUpdateValue } = props;

    // const handleButtonClick = () => {
    //   // Simulate an update and call the callback function
    //   const updatedValue = value + 1;
    //   onUpdateValue(updatedValue);
    // };

  // console.log(props.quiz);
  const answerOptions = [props.quiz.correct_answer, ...props.quiz.incorrect_answers];
  // console.log('answers', answerOptions);
  answerOptions.sort();

  const handleAnswer = (item) => {
    let correct = props.quiz.correct_answer;
    let result = false;
    // console.log(item); 
    if(item === correct){
      result = true;
    }
    
    props.getResults(result);
  }

return(
    <>
    <div>
    {/* {!props.question ? <p>Loading ...</p> : <p>{props.question}</p>} */}
    <p>{props.quiz.question}</p>
    {answerOptions.map((item) => (
      <button onClick={() => handleAnswer(item)} className="buttons" key={item}>
      {item}
    </button>
    ))}
    </div>
    </>
);
}

//investigate a little how you can create 
//a checkbox in your return function in your component to show your options to answer