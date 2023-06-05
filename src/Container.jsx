import { useContext } from "react";
import { useState, useEffect } from "react";
import ToDoList from "./Todolist";
import Lightswitch from "./Lightswitch";
import { DarkModeContext } from "./context/DarkModeContext";

const Container = () => {
  const [item, setItem] = useState("");
  const [item1, setItem1] = useState([]);
  //const [isDisabled, setIsDisabled] = useState(false);

  const events = (e) => {
    setItem(e.target.value);
  };

  const additem = () => {
    setItem1((olditem) => {
      return [...olditem, item];
    });
    setItem("");
  };

  const remove = (id) => {
    setItem1((olditem) => {
      return olditem.filter((olditem, index) => {
        return index !== id;
      });
    });
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      additem();
    }
  };

  // const tasksList = (item1) => {
  //   item1.map((itemvalue, index) => {
  //     return (
  //       <ToDoList itm={itemvalue} key={index} id={index} deleteitem={remove} />
  //     );
  //   });
  // };

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      //use dark css file
    } else {
      //use light css file
    }
  }, [darkMode]);

  return (
    <>
      <div
        className={
          darkMode ? `Container Container-dark` : `Container Container-light`
        }
      >
        <Lightswitch />
        <div>
          <span className={darkMode ? `headingtododark` : `headingtodo`}>
            <h1 className="headin">What&#39;s in Your Mind?</h1>
          </span>
          <div>
            <input
              className="inp"
              type="text"
              name="item"
              placeholder="Enter Task.."
              // onSubmit={handleSubmit}
              onChange={events}
              value={item}
              onKeyDown={handleKeyDown} //learn difference with onKeyUP to match the use case
              //disabled={isDisabled}
            ></input>
            <button
              className="button1"
              id="btn1"
              onClick={additem}
              disabled={!item}
            >
              Add
            </button>
          </div>
          <br />
          <ul className={darkMode ? `inptextdark` : `inptext`}>
            {/* {tasksList(item1)} */}
            {item1.map((itemvalue, index) => {
              return (
                <ToDoList
                  itm={itemvalue}
                  key={index}
                  id={index}
                  deleteitem={remove}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Container;
