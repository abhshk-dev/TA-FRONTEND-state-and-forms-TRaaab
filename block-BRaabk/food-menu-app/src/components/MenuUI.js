import React from "react";

function MenuUI(props) {
  return (
    <ul className="menu container">
      {props.allData.map((menuItem) => (
        <li className="flex-48">
          <div>
            <h3>{menuItem.title}</h3>
            <span>${menuItem.price}</span>
          </div>

          <p>{menuItem.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export default MenuUI;
