import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

// Decrement component
class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber : props.myNumber
    }
    //this.decrementNumber = this.decrementNumber.bind(this); - ALTERNATE METHOD
  }

  decrementNumber = () => {
    if(this.state.currentNumber <= 0) {
      alert("Cannot be less than zero.");
    } else {
      this.setState({currentNumber: this.state.currentNumber-1});
    }
  }

  render() {
    return <div>
      <h1>Current Number: {this.state.currentNumber} </h1>
      <button onClick={this.decrementNumber}>Decrement</button>
      </div>
  }
}

// Define Decrement proptypes
Decrement.propTypes = {
  myNumber : PropTypes.number.isRequired,
}

class App extends Component {
  render() {
    return <div>
      <Decrement myNumber="10"></Decrement>
    </div>;
  }
}

export default App;
