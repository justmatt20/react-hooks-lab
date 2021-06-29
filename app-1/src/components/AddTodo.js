import React, { useState } from "react";

const AddTodo = (props) => {
  const [inputState, setInputState] = useState("");
  console.log(inputState);

  function buttonClick(e) {
    e.preventDefault()
    props.addTodo(inputState)
    setInputState("");
  }

  return (
    <form className="form" onSubmit={buttonClick}>
      <input className="input"
        placeholder="Add a todo!"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}/>
      <button>Submit</button>
    </form>
  );
};

export default AddTodo;