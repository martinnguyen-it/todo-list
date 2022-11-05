import { useRef, useState } from "react";
import { memo } from "react";

const AddTodo = ({onAddTodo}) => {
    const [todo, setTodo] = useState('');
    const nameRef = useRef();

    console.log('render- add todo')

    const handleAddTodo = () => {
      console.log('render- callback')
        onAddTodo && onAddTodo(todo);
        setTodo('');
        nameRef.current.focus();
    }


    return (
        <div className="flex items-center transition duration-500 ease-in-out py-2 border-b-2 border-gray-300 focus-within:border-b-2 focus-within:border-pink-600">
        <input 
          className="flex-1 px-2.5 bg-gray-200 placeholder-gray-500 focus:outline-none" 
          placeholder="Add task..." 
          ref={nameRef}
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} />
        <div 
          className='transition duration-200 ease-in-out text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2 cursor-pointer' 
          onClick={handleAddTodo}>
            <i className="fa-solid fa-pen-to-square"></i>
        </div>  
      </div>
    )
}

export default memo(AddTodo);