import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoSections from "./TodoSections";

function TodoList () {

    return (
        <div className="flex flex-col bg-gray-200 rounded shadow-lg">
           <TodoHeader />
           <TodoSections />
        </div>
    )
}

export default TodoList;