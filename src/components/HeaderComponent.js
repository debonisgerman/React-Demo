import React from "react";

function HeaderComponent({ items, onItemClick }) {


  return (
    <header>
      <nav>
        <ul className="horizontal-list">
          {items.map((item, i) => (
            <li key={i} onClick={onItemClick(item)}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
