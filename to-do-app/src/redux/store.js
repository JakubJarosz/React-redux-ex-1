import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todolist/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
    }
})