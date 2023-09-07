import { useEffect , useState} from 'react';
import './App.css'
import './appJsx.css';
import Question from './components/question';

function App() {

  const [questionArray, setQuestionArray] = useState('hello');
  const [value, setValue]= useState(0);

     const callForQuizAPI = async () => {
      const response = await fetch ('/myAPI/quizApi');
      const data = await response.json();
      console.log('data fromAPI', data);

      setQuestionArray(data.results);
      console.log('question array', data.results);

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

  return (
    <>
      <div>
        <h1 className='title'>Questions Game</h1>
      </div>
      {questionArray[value].question}


    </>
  )
}

export default App
