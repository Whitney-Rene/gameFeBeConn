import { useEffect , useState} from 'react';
import './App.css'
import Question from './components/question';

function App() {

  const [question, setQuestion] = useState('');

     const callForQuizAPI = async () => {
      const response = await fetch ('/myAPI/quizApi');
      const data = await response.json();
      console.log(data);
      setQuestion(data.results[0].question);
     }

    //to see name as soon as page renders, you need a hook, useEffect
    //function that takes an anonymous function=first param=what do I want to happen when page renders
    useEffect(() => {
      callForQuizAPI();
    }, []);

  return (
    <>
    <div>
      <Question question={question}/>
    </div>
    </>
  )
}

export default App
