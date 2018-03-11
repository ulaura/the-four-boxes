import React, { Component } from 'react';
import "./Box.css"; 

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);

    this.state = {
      state: false
    };
  }

  handleChangeColor() {
    console.log("You clicked me!");

    this.setState((prevState) => {
      console.log(!prevState.state);
      return {
        state: !prevState.state
      }
    });
    
  }

  render() {
    return (
      <div className="boxDiv" onClick={this.handleChangeColor}>
        <p>This is a box</p> 
        { /* To render boolean expressions in JSX, it must be converted to
             string first. */}
        {String(this.state.state)}
      </div>
    );
  }
}

export default Box;