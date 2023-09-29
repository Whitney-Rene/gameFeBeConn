import { useEffect, useState } from 'react';
import './App.css'
import Question from './components/question';
import UserName from './components/UserName';
import ScoreBoard from './components/ScoreBoard';

function App() {

  //states
  const [index, setIndex] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  //makes a call to backend
  //needs to be wrapped in try/catch
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

  //put req to backend endpoint connected to db
  const submitScore = async (username) => {

    //structure for req body
    const reqBody = {
      player_name: username,
      currentscore: score, 
    };

    //call or request to backend api
    try {
      const response = await fetch('/myAPI/editplayer_score', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });

      //set a message to update user on status of score being submitted
      if (response.ok) {
        setSubmitStatus(`${reqBody.player_name}, your score has been RECORDED!`);
      } else {
       setSubmitStatus('Score not submitted :(');
      }
    } catch (error) {
      setSubmitStatus('Error with submit');
    }
  };

  const renderMessage = () => {
    //message is true, when we answer the last question
    //when message is true, render <p>
    if (message) {
      return (
        <>
          <br />
          <span>Your score is {score}</span>
          <UserName submitScore={submitScore}/>
        </> )
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
      {/* render scoreboard comp at end of game */}
      {index == questionArray.length -1 && <ScoreBoard /> }

      <h1 className='title'>Questions Game</h1>
      
      {/* message appear to confirm successful/unsuccessful req to backend api */}
      {submitStatus && <p>{submitStatus}</p>}

      {/* logic for displaying question, or ending score */}
      {renderMessage()}

      

    </>
  )
}

export default App

