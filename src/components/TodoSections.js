import { useCallback, useState } from "react";
import { v4 } from 'uuid';
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";


function TodoSections() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("Todo_LIST")) ?? [];
  });

  const handleAddTodo = useCallback((todo) => {
    if (todo === "") {
      return; 
    }

    setTodoList((prevState) => {
      const newTodoList = [...prevState, {id: v4(), name: todo, isCompleted: false}];
      localStorage.setItem('Todo_LIST', JSON.stringify(newTodoList))
      return newTodoList;
    });
  }, [])
  
  const handleDelete = useCallback((id) => {
    setTodoList((prevState) => {
      const newTodoList = prevState.filter((value) => {
        return value.id !== id;
      })
      localStorage.setItem('Todo_LIST', JSON.stringify(newTodoList))
      return newTodoList;
    });
  }, [])

  var completed = todoList.filter((value) => value.isCompleted === true).length;

  const handleChecked = useCallback((id) => {
    setTodoList((prevState) => {
        const newTodoList = prevState.length !== 0 &&  prevState.map((value) => {
          value.id === id ? value.isCompleted = !value.isCompleted : value.isCompleted = value.isCompleted;
          return value;
        })
        localStorage.setItem('Todo_LIST', JSON.stringify(newTodoList))
        return newTodoList;
      });
  }, [todoList])

  return (
    <>
      <div className="p-5">
        <AddTodo onAddTodo={handleAddTodo}/>
      </div>

      <div className="mx-4 my-6 h-96 overflow-auto">
        <ul className="ml-4 list-disc text-lg">
            {todoList.length !== 0 && todoList.map((todo) => (
              <ShowTodo todo={todo} onDelete={handleDelete} onChecked={handleChecked} />
            ))}
          </ul>
      </div>

      <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
        <p className="flex-1 order-1">{todoList.length} task</p>
        <p className="flex-1 order-2 text-center">{completed} complete</p>
        <p className="flex-1 order-last text-right">{todoList.length - completed} open</p>
      </div>

    </>
  );
}

export  default TodoSections;
