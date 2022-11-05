import { memo, useState } from "react"


const ShowTodo = ({todo, onDelete, onChecked}) => {
    const [checked, setChecked] = useState(false)

    const handleDelete = () => {
        onDelete && onDelete(todo.id);
    }

    const handleChecked = () => {
        onChecked && onChecked(todo.id);
    }

    let textDecorationClass = todo.isCompleted
        ? "line-through"
        : "no-underline";
    let textColorClass = todo.isCompleted
        ? "text-pink-600"
        : "text-gray-800";

    return (
        <li className={`flex justify-between py-2.5 px-2.5 border-b border-gray-300 ${textDecorationClass} ${textColorClass}`} key={todo.id}>
            <div>
                <input id={todo.id} checked={todo.isCompleted} onClick={handleChecked} type="checkbox" />
                <label htmlFor={todo.id} className="flex-1 px-2 min-w-0 break-words ">{todo.name}</label>
            </div>
            <div className='text-gray-400 hover:text-pink-500 focus:outline-none' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></div> 
        </li>
    )
}

export default memo(ShowTodo)
