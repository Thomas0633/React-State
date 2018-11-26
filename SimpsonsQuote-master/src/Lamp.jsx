// Lamp.js
import React, { Component } from 'react';
import './lamp.css';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          on: props.on
        };
    }

    handleClick = () => {
        this.setState({ on: !this.state.on });
    };
    
    render() {
        const light = this.state.on ? 'on' : 'off';
        return (
        <div className="Lamp">
            <button onClick={this.handleClick} className={`${light} buttonLamp`}>
                {light.toUpperCase()}
            </button>
            <figure className={`${light} figureLamp`} />
        </div>
        );
    }
}

export default Lamp;