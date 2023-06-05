import { useState } from "react";
import "./App.css";

const ToDoList = (props) => {
  const [complete, setComplete] = useState(false);

  const compeletedtask = () => {
    setComplete((current) => !current);
  };

  return (
    <>
      <div>
        <li>
          <button
            className="tasks_button"
            id="btn2"
            onClick={() => {
              props.deleteitem(props.id);
            }}
          >
            ❌
          </button>
          <button
            id="btn3"
            className={`${complete ? "bg-salmon" : ""}`} //template literal
            onClick={compeletedtask}
          >
            ✔️
          </button>
          {props.itm}
        </li>
      </div>
    </>
  );
};

export default ToDoList;
