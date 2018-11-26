// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from 'reactstrap';

import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
      classImg: "App-logo"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      on: !this.state.on,
      classImg: !this.state.classImg
    });
  }

  render() {
    const logoReact = this.state.on ? 'on' : 'off';
    const classImg = this.state.classImg ? 'App-logo' : 'App-logo onImg';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={classImg} alt="logo" />
          <br />
          <Button color="info" className='mt-3 mb-5' onClick={this.handleClick}>
            {logoReact}
          </Button>

          <h1>Allume la lumière !</h1>
          <h2 className='pt-2 pb-2'><i className="fas fa-lightbulb"></i> Amuse toi avec ces bouttons ! <i className="fab fa-react"></i></h2>
        </header>
        
        <Lamp on />
        <Lamp />
      </div>
    );
  }
}

export default App;