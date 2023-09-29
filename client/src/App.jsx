import { useEffect, useState } from 'react';
import './App.css'
import Question from './components/question';
import UserName from './components/UserName';

function App() {

  //states
  const [index, setIndex] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  //makes a call to backend
  const callForQuizAPI = async () => {
    const response = await fetch('/myAPI/quizApi');
    const data = await response.json();

    setQuestionArray(data.results);
  };

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
  };

  const submitScore = async (username) => {

    const reqBody = {
      player_name: username,
      currentscore: score, 
    };

    try {
      const response = await fetch('/myAPI/editplayer_score', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });

      if (response.ok) {
        setSubmitStatus(`${reqBody.player_name}, your score has been submitted!`);
      } else {
       setSubmitStatus('Score not submitted :(');
      }
    } catch (error) {
      setSubmitStatus('Error with submit');
    }
  };

  /* will I need to put something here, so data/submitScore can come through*/
  const renderMessage = (/* ?? */) => {
    //message is true, when we answer the last question
    //when message is true, render <p>
    if (message) {
      return <button onClick={() => submitScore()} className='buttons'>CLICK to save your score of {score} points</button>
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
  };

  //hook, what I want to happen when page renders, does the position matter?
  useEffect(() => {
    callForQuizAPI();
  }, []);

  return (
    <>

      <h1 className='title'>Questions Game</h1>
      
      <UserName submitScore={submitScore}/>
      
      {submitStatus && <p>{submitStatus}</p>}

      {renderMessage()}

    </>
  )
}

export default App

