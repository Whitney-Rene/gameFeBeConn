import { useEffect, useState } from 'react';
import './App.css'
import Question from './components/question';

function App() {
  //states
  const [index, setIndex] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(false);
  //const [answer, setAnswer] = useState(undefined);

  //makes a call to backend
  const callForQuizAPI = async () => {
    const response = await fetch('/myAPI/quizApi');
    const data = await response.json();
    // console.log('data fromAPI', data);

    setQuestionArray(data.results);

    //we need to wait here to populate the states, react is too fast
    console.log('question array', questionArray);

  }

  //hook, what I want to happen when page renders
  useEffect(() => {
    callForQuizAPI();
  }, []);

  const handleResult = (result) => {

    //if user selects correct answer, increment score by 1
    if (result === true) {
      setScore(score + 1);
      // setAnswer("");
    }
    //if index is the last index of array then setMessage
    if (index == questionArray.length - 1) {
      setMessage(true);
    } else {
      //if index is not the last index, increment the index, show next question
      setIndex(index + 1);
    }

  }

  const renderMessage = () => {
    //message is true, when we answer the last question
    //when message is true, render <p>
    if (message) {
      return <p>You have completed the game! & Your score is {score}</p>
      //if message is false, render questions or empty string
    } else {
      //is questionArray populated?
      if (questionArray.length > 0) {
        return <Question quiz={questionArray[index]} getResults={handleResult} />
      }
      //if questionsArray is not populated
      else {
        return ` `
      }
    }
  }

  return (
    <>
      <div>
        <h1 className='title'>Questions Game</h1>
      </div>
      {renderMessage()}
      <p className='score'>{score}</p>
    </>
  )
}

export default App

