import React, { Component } from 'react';
import './App.css';
import logo from "./logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
render() {
  return ( 
    <Router>
        <div className="container">
          <nav className="container navbar navbar-expand-lg navebar-light bg-light">
            <a className="navbar-brand" href="https://github.com/Papa-Sean" target="_blank">
              <img src={logo} width="30" height="30" alt="Papa's GIT"></img>
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack ROTTEN INVENTORY</Link>
            <div className="colllapse nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Creat Todo</Link>
                </li>

              </ul>
            </div>
          </nav>
          
        
          <div>
            <h2>MERN-Stack Rotten App</h2>     
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </div>
          
        </div>
    </Router>
  );
}}

export default App;
