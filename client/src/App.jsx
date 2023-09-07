import { useEffect , useState} from 'react';
import './App.css'
import Question from './components/question';

function App() {

  const [question, setQuestion] = useState('');
  // const [answerOpts, setAnswerOpts] = useState('');
  // const [value, setValue] = useState(0);
  // const [questionArray, setQuestionArray] = useState([]);

     const callForQuizAPI = async () => {
      const response = await fetch ('/myAPI/quizApi');
      const data = await response.json();
      console.log(data);
      

      // const answers = [data.results[0].correct_answer, ...data.results[0].incorrect_answers];

      setQuestion(data.results[0].question);
      // setQuestion(data.results[value]);
      // setAnswerOpts(answers);
      // setQuestionArray(data.results);

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
      <h1>Hello, this is WR</h1>
      {/* <Question incorrect={question.incorrect_answers} correct={question.correct_answer} question={question.question} value={value} onUpdateValue={updateValue}/> */}
      {question}

    </div>
    </>
  )
}

export default App
