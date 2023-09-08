import React, { useState } from 'react';
import '../App.css';

export default function Question (props) {

  // const [answer, setAnswer] = useState(undefined);

  //creates a variable to hold answer options in an array
  const answerOptions = [props.quiz.correct_answer, ...props.quiz.incorrect_answers];
  
  //changes the order of the answer options, so that the first answer is not always correct
  answerOptions.sort();
  //shuffle function??

  //handles the answer
  const handleAnswer = (item) => {
    //answer correct?
    let correct = props.quiz.correct_answer;
    let result = false;
    //console.log('item', item); 
    if(item === correct){
      result = true;
    }
    //handleResult() from parent passed as a prop to child
    //function is triggered, and info/param is passed back to parent
    props.getResults(result);
  }

return(
    <>
      <div>
        {/* question on page */}
        <p>{props.quiz.question}</p>
        {/* answers rendered with button and function triggered by onClick */}
        {answerOptions.map((item) => (
          <button onClick={() => handleAnswer(item)} className="buttons" key={item}>
          {item}
          </button>
        ))}

      </div>
    </>
);
}

