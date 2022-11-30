import { memo, useCallback, useState } from "react"
import { useDispatch } from 'react-redux';
import todoListSlice from '../redux/todosSlice';


const ShowTodo = ({todo}) => {

    const dispatch = useDispatch();

    const [checked, setChecked] = useState(todo.isCompleted);
    const handleCheck = useCallback(() => {
        setChecked(!checked);
        dispatch(todoListSlice.actions.handleTodoCheck(todo.id));
    }, [checked, todo.id]);

    const handleDelete = useCallback(() => {
        dispatch(todoListSlice.actions.handleTodoDelete(todo.id));
    }, [])

    let textDecorationClass = todo.isCompleted
        ? "line-through"
        : "no-underline";
    let textColorClass = todo.isCompleted
        ? "text-pink-600"
        : "text-gray-800";

    return (
        <li className={`flex justify-between py-2.5 px-2.5 border-b border-gray-300 ${textDecorationClass} ${textColorClass}`} key={todo.id}>
            <input className="cursor-pointer" id={todo.id} checked={todo.isCompleted} onClick={handleCheck} type="checkbox" />
            <label htmlFor={todo.id} className="flex-1 px-2 min-w-0 break-words cursor-pointer">{todo.name}</label>
            <button className='text-gray-400 hover:text-pink-500 focus:outline-none' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button> 
        </li>
    )
}

export default memo(ShowTodo)
