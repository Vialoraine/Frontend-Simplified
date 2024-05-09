import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";

function App() {

  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true);
  }

  function onTodoCancel() {
    setShowModal(false);
  }

  function onTodoConfirm() {
    setShowModal(false);
  }

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish The Interview Section"
        />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
      </div>
      {showModal && (
        <Modal
          title="Are you sure?"
          onTodoCancel={onTodoCancel}
          onTodoConfirm={onTodoConfirm}
        />
      )}
    </div>
  );
}

export default App;
