import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      fontSize: "16",
    };
  }
  handleFontChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  handleRangeChange = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  render() {
    let fonts = [
      "Roboto",
      "Open Sans",
      "Montserrat",
      "Send Flowers",
      "Ingrid Darling",
      "Oswald",
      "Raleway",
      "Rubik Glitch",
      "Rubik Wet Paint",
      "Indie Flower",
    ];
    let size = this.state.fontSize + "px";
    return (
      <div className="container">
        <h1>FONT APP</h1>
        <div className="control">
          <input
            type="text"
            placeholder="type Something"
            onChange={this.handleFontChange}
            value={this.state.inputText}
          />
          <input
            type="range"
            min="16"
            max="48"
            onChange={this.handleRangeChange}
            value={this.state.fontSize}
          />
        </div>

        <div className=" flex">
          {fonts.map((font) => (
            <div key={font} className="font-container flex-30 ">
              <span>{font.toUpperCase()}</span>
              <p
                style={{
                  fontFamily: font,
                  fontSize: size,
                }}
              >
                {this.state.inputText}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
