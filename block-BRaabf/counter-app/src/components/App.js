import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
  }
  handleIncrement = () => {
    this.setState({
      count:
        this.state.count + this.state.step > this.state.max
          ? this.state.count
          : this.state.count + this.state.step,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <div className="flex1">
          <div>
            {[5, 10, 15].map((step) => (
              <button
                onClick={() => this.setState({ step: step })}
                className={this.state.step === step ? "active" : ""}
              >
                {step}
              </button>
            ))}
          </div>
          <div>
            {[15, 100, 200].map((max) => (
              <button
                onClick={() => this.setState({ max: max })}
                className={this.state.max === max ? "active" : ""}
              >
                {max}
              </button>
            ))}
          </div>
        </div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default App;
