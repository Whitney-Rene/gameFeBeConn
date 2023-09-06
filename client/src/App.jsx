import { useEffect , useState} from 'react';
import './App.css'
import Question from './components/question';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [test, setTest] = useState('');
  const [question, setQuestion] = useState('');

    const callForName = async () => {
      const response = await fetch ('/myAPI/myName');
      const data = await response.json();
      console.log(data);
      setName(data.name);
    }
     const callForMessage = async () => {
      const response = await fetch ('myAPI/');
      const data = await response.json();
      console.log(data);
      setMessage(data.message);
     }

     const callForQuiz = async () => {
      const response = await fetch ('http://localhost:1234/test');
      const data = await response.json();
      console.log(data);
      setTest(data.test);
     }

     const callForQuizAPI = async () => {
      const response = await fetch ('http://localhost:1234/quizApi');
      const data = await response.json();
      console.log(data);
      setQuestion(data.results[0].question);
     }

    //to see name as soon as page renders, you need a hook, useEffect
    //function that takes an anonymous function=first param=what do I want to happen when page renders
    useEffect(() => {
      callForName();
      callForMessage();
      callForQuiz();
      callForQuizAPI();
    }, []);

  return (
    <>
    <div>
      <h1>Hi {name}</h1>
      {message}
      {test}
      <Question question={question}/>
    </div>
    </>
  )
}

export default App
