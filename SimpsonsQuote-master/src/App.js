// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote.js";
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
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>

        <button onClick={this.handleClick}>
          {logoReact}
        </button>

        <Lamp on />
        <Lamp />

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;