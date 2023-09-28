import { useEffect, useState } from 'react';
import './App.css'
import Question from './components/question';

function App() {

  //states
  const [index, setIndex] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(false);

  //create some state to handle user's name??????
  const [userName, setUserName] = useState("");
  //form, what is your name?
  //then message that says hello "user"

  //makes a call to backend
  const callForQuizAPI = async () => {
    const response = await fetch('/myAPI/quizApi');
    const data = await response.json();

    setQuestionArray(data.results);

  }

  const handleResult = (result) => {

    //if user selects correct answer, increment score by 1
    if (result === true) {
      setScore(score + 8);
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

  //????
  // const submitScore = (username) => {
      //const response = await fetch('/myAPI/quizApi/${username}/${score}');

  // }

  /* will I need to put something here, so data/submitScore can come through*/
  const renderMessage = (/* ?? */) => {
    //message is true, when we answer the last question
    //when message is true, render <p>
    if (message) {
      // <button onClick={() => submitScore()}> Submit {score} </button>  ???????
      return <p>You have completed the game! & Your score is {score}</p>
      //if message is false, render questions or empty string
    } else {
      //is questionArray populated?
      if (questionArray.length > 0) {
        return ( <>
                  <Question quiz={questionArray[index]} getResults={handleResult} />
                  <p className='score'>{score}</p>
                </>)
      }
      //if questionsArray is not populated
      else {
        return ` `
      }
    }
  }

  //hook, what I want to happen when page renders, does the position matter?
  useEffect(() => {
    callForQuizAPI();
  }, []);

  return (
    <>

      <div>
        <h1 className='title'>Questions Game</h1>
          <div>
          {index == questionArray.length -1 ? null : <span className='points'>Each Question is worth 8 points</span>}
          </div>
      </div>

      {renderMessage()}

    
      {/* {index == questionArray.length ? null : <p className='score'>{score}</p>} */}


    {/* button to show/display score board, onClick=make a call to endpoint, which will add score to current value of column, where username = "user'name" */}
    </>
  )
}

export default App

