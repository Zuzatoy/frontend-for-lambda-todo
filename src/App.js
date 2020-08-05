import React from 'react';
import CandidateForm from './components/CandidateForm';
import CandidatesList from './components/CandidatesList';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Route 
            exact
            path='/'
            render={() => <CandidateForm /> } />
        <Route 
            exact
            path='/list'
            render={() => <CandidatesList /> } />
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
    </Router>

  );
}

export default App;
