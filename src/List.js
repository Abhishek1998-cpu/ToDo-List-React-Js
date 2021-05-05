import React from "react";

function List(props) {
  return (
    <>
      <div className="Container2">
        <button
          className="button2"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          DEL
        </button>
        <li className="listItem"> {props.text} </li>
      </div>
    </>
  );
}

export default List;
