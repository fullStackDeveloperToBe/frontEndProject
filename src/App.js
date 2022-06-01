import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserService from './services/UserService';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path = '' component={UserService}></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
