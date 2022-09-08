import React from "react";
import data from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  render() {
    return (
      <ul>
        {data.map((faq, index) => (
          <li>
            <h1
              onClick={() => {
                this.setState({
                  activeIndex: this.state.activeIndex === index ? null : index,
                });
              }}
            >
              {faq.Q} {this.state.activeIndex === index ? "🐵" : "🙈"}
            </h1>
            {index === this.state.activeIndex ? <p>{faq.A}</p> : ""}
            {/**/}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
