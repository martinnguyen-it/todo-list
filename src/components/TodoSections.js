import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import todoListSlice from '../redux/todosSlice';
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import { todoListSelector } from "../redux/selectors";
import getDataApi from "../redux/getDataApi"


function TodoSections() {
  const dispatch = useDispatch();

  const todoList = useSelector(todoListSelector);

  useEffect(() => {
    getDataApi().then((data) => {
      dispatch(
        todoListSlice.actions.setInitialState(data)
      );
      });
  }, [])

  const handleAddTodo = useCallback((todo) => {
    if (todo === "") {
      return; 
    }

    dispatch(
      todoListSlice.actions.addTodo({
        name: todo,
        isCompleted: false,
      })
    );
  }, [])
  
  // const handleDelete = useCallback((id) => {
    // setTodoList((prevState) => {
    //   const newTodoList = prevState.filter((value) => {
    //     return value.id !== id;
    //   })
    //   localStorage.setItem('Todo_LIST', JSON.stringify(newTodoList))
    //   return newTodoList;
    // });
  // }, [])

  var completed = todoList.filter((value) => value.isCompleted === true).length;

  return (
    <>
      <div className="p-5">
        <AddTodo onAddTodo={handleAddTodo}/>
      </div>

      <div className="mx-2 my-6 h-96 overflow-auto">
        <ul className="ml-4 list-disc text-lg">
            {todoList.length !== 0 && todoList.map((todo) => (
              <ShowTodo 
                key={todo.id}
                todo={todo} 
              />
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
