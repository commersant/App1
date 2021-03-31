/*import logo from './logo.svg';*/
import './App.css';
import React from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

function   App() {
  return (
      <div className={App}>
          <BrowserRouter>
              <nav className="nav">
              <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
              <NavLink className="nav-link" to="/about">О нас</NavLink>
              <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
              </nav>

              <Route exact path="/" render={()=><h1>Главная страница</h1>}/>
              <Route path="/about" render={()=><h1>О нас</h1>}/>
              <Route path="/contact-us" render={()=><h1>Контакты</h1>}/>
          </BrowserRouter>
          {/*<h1> Hello Wold!</h1>*/}
      </div>
  );
      /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
