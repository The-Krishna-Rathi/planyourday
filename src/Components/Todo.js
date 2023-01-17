import "./Todo.css";
import todoImg from "../Images/todo.svg";
import { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addData = () => {
    if (inputData === "") {
      return;
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure className="icon-div">
            <img src={todoImg} className="todo-icon" alt="Todo-Icon" />
            <figcaption className="todo-caption">Plan your day...😎</figcaption>
          </figure>

          <div className="add-task-div">
            <input
              type="text"
              placeholder="✍ Add task"
              className="task-input"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa-solid fa-plus add-btn"
              title="Add Task"
              onClick={addData}
            ></i>
          </div>

          <div className="task-div">
            <div className="each-task">
              <h3>Apple</h3>
              <i className="fa-solid fa-trash del-btn"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
