import "./Todo.css";
import todoImg from "../Images/todo.svg";
import { useEffect, useState } from "react";

const getLocalStorageData = () => {
  const list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else return [];
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalStorageData());
  const [editID, setEditID] = useState(-1);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

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

  const handelEdit = (id) => {
    setEditID(id);
    let data = items[id];
    setInputData(data);
  };

  const saveEdit = () => {
    const newData = inputData;
    items[editID] = newData;
    setInputData("");
    setEditID(-1);
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
            {editID !== -1 ? (
              <i
                class="fa-solid fa-pen-to-square edit-btn"
                title="Save Edit"
                onClick={saveEdit}
              ></i>
            ) : (
              <i
                className="fa-solid fa-plus add-btn"
                title="Add Task"
                onClick={addData}
              ></i>
            )}
          </div>

          <div className="task-div">
            {items.map((ele, ind) => {
              return (
                <div className="each-task" key={ind}>
                  <h3>{ele}</h3>
                  <i
                    class="fa-solid fa-pen-to-square edit-btn"
                    onClick={() => handelEdit(ind)}
                  ></i>
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
