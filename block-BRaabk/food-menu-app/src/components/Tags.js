import React from "react";
import data from "../data.json";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
    };
  }
  render() {
    let menuData = data.map((item) => item.category);
    console.log(menuData);
    return (
      <ul className="tags">
        {menuData.map((menuItem) => (
          <li>{menuItem}</li>
        ))}
      </ul>
    );
  }
}

export default Tags;
