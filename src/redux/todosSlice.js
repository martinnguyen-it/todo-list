import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";


export default createSlice({
    name: 'todoList',
    initialState: {
        todoListState: [],
    },
    reducers: {
        setInitialState: (state, action) => {
            void(state.todoListState = action.payload)
        },
        addTodo: (state, action) => {
            state.todoListState.push(action.payload)
        },
        handleTodoCheck: (state, action) => {
            const currentTodo = state.todoListState.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.isCompleted = !currentTodo.isCompleted;
                axios.put(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${action.payload}`, {
                    isCompleted: currentTodo.isCompleted
                })
            }
        },
        handleTodoDelete: (state, action) => {
            state.todoListState = state.todoListState.filter((todo) => todo.id !== action.payload);
            axios.delete(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${action.payload}`)
        }
    }
})