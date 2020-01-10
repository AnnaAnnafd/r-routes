import React from 'react';
import ReactDOM from 'react-dom';
import  history from './helpers/_history';
import { Router } from "react-router-dom";
import App from './App';


ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
