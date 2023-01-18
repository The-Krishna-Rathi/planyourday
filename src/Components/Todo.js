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

  const handleDelete = (id) => {
    const newArray = items.filter((e, ind) => {
      return ind !== id;
    });

    setItems([...newArray]);
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
            {items.map((ele, ind) => {
              return (
                <div className="each-task" key={ind}>
                  <h3>{ele}</h3>
                  <i
                    className="fa-solid fa-trash del-btn"
                    onClick={() => handleDelete(ind)}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
