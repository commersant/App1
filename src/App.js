/*import logo from './logo.svg';*/
import './App.css';
import React from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

function Menu() {
    return (
        <nav className="nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
        <NavLink className="nav-link" to="/about">О нас</NavLink>
        <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}
function Main() {
    return(
        <div>
            <h3>Главная страница</h3>
            <div className="container">
                <img src={"logo512.png"} className="img-fluid img-thumbnail bg-light p-5" alt="изображение" /></div>
        </div>
    );
}
function AboutUs() {
    return(
        <div>
            <h4 className="mb-5">О нас</h4>
            <div className="container text-start">
                <p>г. Москва, Киевское шоссе (500м от МКАД), дом 4, строение 2, корпус Г, вход 9, БП "Румянцево</p>
                <h5>Телефон:</h5>
                <p>7 (495) 477-52-43</p>
                <h5>E-mail:</h5>
                <p>zaryadka@zaryadka.fit</p>
                <h5>Время работы:</h5>
                <p>Понедельник - Воскресенье: с 6-30 по 22-00.</p>
            </div>
        </div>
    );
}
function ContactUs() {
    return(
        <div>
            <h4 className="mb-5">Обратная связь</h4>
            <div className = "container">
                <form action="">
                    <div className="mb-3">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>

    );
}
function   App() {
  return (
      <div className={App}>
          <BrowserRouter>
              <Menu />
              <Route exact="/" path="/" render = {() => <Main/>} />
              <Route path="/about" render = {() => <AboutUs/>} />
              <Route path="/contact-us" render = {() => <ContactUs/>} />
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
