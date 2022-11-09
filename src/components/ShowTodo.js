import { memo, useCallback } from "react"


const ShowTodo = ({todo, onDelete, onChecked}) => {
    const handleDelete = useCallback(() => {
        onDelete && onDelete(todo.id);
    }, [onDelete, todo.id])

    const handleChecked = useCallback(() => {
        onChecked && onChecked(todo.id);
    }, [onChecked, todo.id])

    let textDecorationClass = todo.isCompleted
        ? "line-through"
        : "no-underline";
    let textColorClass = todo.isCompleted
        ? "text-pink-600"
        : "text-gray-800";

    return (
        <li className={`flex justify-between py-2.5 px-2.5 border-b border-gray-300 ${textDecorationClass} ${textColorClass}`} key={todo.id}>
            <input className="cursor-pointer" id={todo.id} checked={todo.isCompleted} onClick={handleChecked} type="checkbox" />
            <label htmlFor={todo.id} className="flex-1 px-2 min-w-0 break-words cursor-pointer">{todo.name}</label>
            <button className='text-gray-400 hover:text-pink-500 focus:outline-none' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button> 
        </li>
    )
}

export default memo(ShowTodo)
