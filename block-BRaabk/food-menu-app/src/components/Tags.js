import React from "react";
import data from "../data.json";
import MenuUI from "./MenuUI";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }
  handleClick = (itemCategory) => {
    this.setState({
      activeItem: itemCategory,
    });
  };
  render() {
    let menuData = data.map((item) => item.category);
    let filteredTags = menuData.filter(
      (item, index) => menuData.indexOf(item) === index
    );
    let allData;

    if (!this.state.activeItem) {
      allData = data;
    } else {
      allData = data.filter((item) => item.category === this.state.activeItem);
    }

    return (
      <>
        <ul className="tags">
          {filteredTags.map((itemCategory) => (
            <li
              key={itemCategory}
              onClick={() => this.handleClick(itemCategory)}
            >
              {itemCategory}
            </li>
          ))}
        </ul>
        <MenuUI allData={allData} />
      </>
    );
  }
}

export default Tags;
