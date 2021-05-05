import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./List.js";

function App() {
  const [Item, setItem] = useState();
  const [Item2, setItem2] = useState([]);
  const update = (event) => {
    setItem(event.target.value);
  };
  const onClick = () => {
    setItem2((oldItems) => {
      return [...oldItems, Item];
    });
    setItem("");
  };
  const deleteItem = (id) => {
    console.log("Deleted");
    setItem2((oldItems) => {
      return oldItems.filter((arrayelement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="Container">
        <h2 className="heading">ToDo List</h2>
        <br />
        <span>
          <input
            className="input"
            type="text"
            placeholder="Add Items"
            onChange={update}
            value={Item}
          />
          <button onClick={onClick} className="button">
            Add
          </button>
        </span>
      </div>
      <ol>
        {/* <li className="listItem">{Item2}</li> */}
        {Item2.map((itemval, index) => {
          return (
            <List key={index} id={index} text={itemval} onSelect={deleteItem} />
          );
        })}
      </ol>
    </>
  );
}

export default App;

// CSS at 10:40
