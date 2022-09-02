import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "basketball",
    };
  }
  render() {
    let labels = ["basketball", "PUBG", "TIGER", "Phone", "Laptop", "Cricket"];

    return (
      <>
        <div className="flex">
          {labels.map((label) => (
            <button
              className={this.state.active === label ? "active" : ""}
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="image-container flex">
          <img
            src={`./images/${this.state.active}.jpg`}
            alt={this.state.active}
          />
        </div>
      </>
    );
  }
}

export default App;
