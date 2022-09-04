import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;
