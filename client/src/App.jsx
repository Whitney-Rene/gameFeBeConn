import { useEffect , useState} from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [quiz, setQuiz] = useState('');

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
      setQuiz(data.test);
     }

    //to see name as soon as page renders, you need a hook, useEffect
    //function that takes an anonymous function=first param=what do I want to happen when page renders
    useEffect(() => {
      callForName();
      callForMessage();
      callForQuiz();
    }, []);

  return (
    <>
    <div>
      <h1>Hi {name}</h1>
      {message}
      {quiz}
    </div>
    </>
  )
}

export default App
