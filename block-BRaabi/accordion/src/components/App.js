import React from "react";
import data from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {data.map((elm) => (
          <li>
            {elm.Q}
            <button>&#8595;</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
