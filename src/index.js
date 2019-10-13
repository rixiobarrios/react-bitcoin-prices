import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
// we need to import the Router component and and place it as the root component of our application
import { BrowserRouter as Router } from 'react-router-dom';

// By making Router the root component of our app, it will pass down several router - specific objects to its child components.Things like current location and url can be accessed or changed. Additionally, in order to use the other routing components provided by React Router, a Router parent component is necessary.
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
