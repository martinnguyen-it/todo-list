import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";

const store = configureStore({
    reducer: {
        todoList: todosSlice.reducer,
    }
})

export default store