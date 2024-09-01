import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todolist/todoSlice";
import postlistSlice from "./postlist/postlistSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
        postlist: postlistSlice
    }
})