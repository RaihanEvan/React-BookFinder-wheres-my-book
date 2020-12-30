import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Book_desc from './components/Book_desc'
import {BrowserRouter, Link, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
    <Route path="/" exact component={App}/>
    <Route path="/book/:id" exact component={Book_desc}/>
    </div>
    </BrowserRouter>
  </React.StrictMode>,document.getElementById('root'));
