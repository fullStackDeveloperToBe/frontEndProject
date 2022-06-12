import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserService from './services/UserService';
import About from './components/about';
import Next from './components/next';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Router>
  //         <Route exact path = '' component={UserService}></Route>
  //       </Router>
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/next">Next</Link>
          </li>
        </ul>
        </nav>
        <Switch>
          <Route exact path="/"><UserService /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/next"><Next /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
