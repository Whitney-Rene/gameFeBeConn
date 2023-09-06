import { useEffect , useState} from 'react';
import './App.css'
import Question from './components/question';

function App() {

  const [question, setQuestion] = useState('');
  const [answerOpts, setAnswerOpts] = useState('');

     const callForQuizAPI = async () => {
      const response = await fetch ('/myAPI/quizApi');
      const data = await response.json();
      console.log(data);

      const answers = [data.results[0].correct_answer, ...data.results[0].incorrect_answers];

      setQuestion(data.results[0].question);
      setAnswerOpts(answers);

     }

    //to see name as soon as page renders, you need a hook, useEffect
    //function that takes an anonymous function=first param=what do I want to happen when page renders
    useEffect(() => {
      callForQuizAPI();
    }, []);

  return (
    <>
    <div>
      <Question question={question} answerOpts={answerOpts}/>
      
    </div>
    </>
  )
}

export default App
