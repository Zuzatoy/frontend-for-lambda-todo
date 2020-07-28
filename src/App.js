import React, { useState, useEffect } from 'react';
import CandidateForm from './components/CandidateForm';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mb9rb1c19g.execute-api.ap-southeast-2.amazonaws.com/dev/todos', {
    method: "GET",
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }})
      .then(response => response.json())
      .then(({ data }) => {
        setData(data);
        console.log(1111, data)
      })
    }, []);
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Yo Candidate!!! Reveal yourself 
        </p>
        <CandidateForm />
        {/* <div>  
          {data.map(({ id, name, status }) => (
                    <div key={id}>
                <div>
                    <span>{name}</span>
              </div>
            </div>
                ))}
        </div> */}
      </header>
    </div>
  );
}

export default App;
