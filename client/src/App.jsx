import { useEffect , useState} from 'react';
import './App.css'
import './appJsx.css';
import Question from './components/question';

function App() {
  const [index, setIndex]= useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  const [answers, setAnswers]= useState('');
  // const [loading, setLoading] = useState(false);

     const callForQuizAPI = async () => {
      const response = await fetch ('/myAPI/quizApi');
      const data = await response.json();
      console.log('data fromAPI', data);

      setQuestionArray(data.results);
      // console.log('INDEX', index);
      //we need to wait here to populate the states, react is too fast
      console.log('question array', questionArray);
      console.log('test', questionArray[index].question);

      // const answerOptions = [questionArray[index].correct_answer, ...questionArray[index].incorrect_answers];
      // console.log('answers', answerOptions);
      // setAnswers(answerOptions);

     }
     
    //  const checkData = (questionArray) => {
    //   console.log("Qarray", questionArray);
    //   if(questionArray){
    //     setLoading(true);
    //   }
    //  }

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

    // useEffect(() =>{
    //   checkData();
    // }, [loading])

  return (
    <>
      <div>
        <h1 className='title'>Questions Game</h1>
      </div>
      {
        questionArray.length > 0 ? (
          <Question quiz={questionArray[index]}/>
        ) : ` `
      }
      {/* {!questionArray ? <p>Loading...</p> : <Question question={questionArray[index].question} answers={answers}/>} */}
    
    </>
  )
}

export default App

// investigate a little how you can create a checkbox in your return function 
//in your component to show your options to answer

