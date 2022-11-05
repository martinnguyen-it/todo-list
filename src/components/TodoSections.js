import { useState } from "react";
import { v4 } from 'uuid';
import AddTodo from "./AddTodo";


function TodoSections() {
  const [todoList, setTodoList] = useState([]);

  console.log('render-todocontent')


  const handleAddTodo = (todo) => {
    if (todo === "") {
      return; 
    }

    setTodoList((prevState) => {
      const newTodoList = [...prevState, {id: v4(), name: todo, isCompleted: false}];
      return newTodoList;
    });
  };
  
  const handleDelete = (todo) => {
    if (todo.name === "") {
      return;
    }
    setTodoList((prevState) => {
      const newTodoList = prevState.filter((value) => {
        return value.id !== todo.id;
      })
      return newTodoList;
    });
  }

  return (
    <div className="p-5">
      <AddTodo onAddTodo={handleAddTodo}/>

      <div>
        <ul className="ml-4 list-disc text-lg">
            {todoList.map((todo, index) => (
              <li className="flex justify-between py-2.5 px-2.5 border-b border-gray-300" key={index}>
                <div>
                  {/* <input onClick={() => handleChecked(index)} type="checkbox" /> */}
                  <label className="flex-1 px-2 min-w-0 break-words">{todo.name}</label>
                </div>
              </li>
            ))}
          </ul>
      </div>

    </div>
  );
}

export  default TodoSections;