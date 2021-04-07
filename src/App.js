import React, { useState } from "react";

import HeaderComponent from "./components/HeaderComponent";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const pushItem = (item) => {
    const itemValue = item.target.innerText;
    const existingItem = items.filter((i) => i === itemValue).length > 0;
    let newItems = [];

    if (existingItem) {
      newItems = items.filter((i) => i !== itemValue);
    } else {
      newItems = [...items, itemValue];
    }

    setItems(newItems);
  };

  const renderItems = items.map((item, i) => <li key={i}>{item}</li>);

  return (
    <>
      <HeaderComponent
        onItemClick={() => pushItem}
        items={["home", "item1", "item2"]}
      />
      <ul className="item-list">{renderItems}</ul>
    </>
  );
}

export default App;
