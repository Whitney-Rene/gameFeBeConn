import { useEffect , useState} from 'react';
import './App.css'
import './appJsx.css';
import Question from './components/question';

function App() {
  const [index, setIndex]= useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [score, setScore]= useState(0);
  const [message, setMessage] = useState(false);
  // const [loading, setLoading] = useState(false);

     const callForQuizAPI = async () => {
      const response = await fetch ('/myAPI/quizApi');
      const data = await response.json();
      console.log('data fromAPI', data);

      setQuestionArray(data.results);
      //we need to wait here to populate the states, react is too fast
      console.log('question array', questionArray);
      console.log('test', questionArray[index].question);

     }

    // Callback function passed to ChildComponent
    // const updateValue = (newValue) => {
    //   setValue(newValue);
    //   console.log("in updateValue funct", value);
    //   console.log(questionArray[value]);
    //   setQuestion(questionArray[value]);
    // };

    //to see something as soon as page renders, you need a hook, useEffect
    //function that takes an anonymous function=first param=what do I want to happen when page renders
    useEffect(() => {
      callForQuizAPI();
    }, []);

    const handleResult = (result) => {
      //if user selects correct answer, increment score by 1
      if(result === true) {
        setScore(score + 1);
      }
      //if index is the last index of array then setMessage
      if(index == questionArray.length-1){
        setMessage(true);
      } else {
      //if index is not the last index, increment the index
        setIndex(index + 1);
      }
      
    }

  return (
    <>
      <div>
        <h1 className='title'>Questions Game</h1>
      </div>
      {/* less readable, if/else is easier to read */}
      {/* {
        message ? (<p>You have completed the game! & Your score is {score}</p>) : (
          <>{
            questionArray.length > 0 ? (
              <Question quiz={questionArray[index]} getResults={handleResult}/>
            ) : ` `
          }
          <button>{score}</button>

          </>
        )
      } */}
    
    
    </>
  )
}

export default App

// investigate a little how you can create a checkbox in your return function 
//in your component to show your options to answer

