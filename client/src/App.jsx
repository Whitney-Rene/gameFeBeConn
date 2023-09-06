import { useEffect , useState} from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

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

    //to see name as soon as page renders, you need a hook, useEffect
    //function that takes an anonymous function=first param=what do I want to happen when page renders
    useEffect(() => {
      callForName();
      callForMessage();
    }, []);

  return (
    <>
    <div>
      <h1>Hi {name}</h1>
      {message}
    </div>
    </>
  )
}

export default App
