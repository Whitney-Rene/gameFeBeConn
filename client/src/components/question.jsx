import React from 'react';
import appJsx from '../appJsx.css';

export default function Question (props) {

  //creates a variable to hold answer options in an array
  const answerOptions = [props.quiz.correct_answer, ...props.quiz.incorrect_answers];
  //changes the order of the answer options, so that the first answer is not always correct
  //shuffle function
  answerOptions.sort();

  const handleAnswer = (item) => {
    let correct = props.quiz.correct_answer;
    let result = false;
    // console.log(item); 
    if(item === correct){
      result = true;
    }
    //handleResult function is passed to child and called here
    props.getResults(result);
  }

return(
    <>
      <div>
    
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

//{/* {!props.question ? <p>Loading ...</p> : <p>{props.question}</p>} */}