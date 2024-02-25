import React, { useState } from "react";
import "./Text.css";
import Logo from "./Logo";
import Form from "./Form";
import Inputlist from "./Inputlist";
import Stats from "./Stats";

function App() {
  const [addval, setAddval] = useState([]);
  function addItems(item) {
    setAddval((addval) => [...addval, item]);
  }
  function handlDelete(id) {
    setAddval(() => addval.filter((item) => item.id !== id));
  }
  function checkbox(id) {
    setAddval((addval) =>
      addval.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItem() {
    setAddval([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form deStructure={addItems} />
      <Inputlist
        addvals={addval}
        onDelete={handlDelete}
        ontoggle={checkbox}
        clearItem={clearItem}
      />
      <Stats addval={addval} />
    </div>
  );
}
export default App;
