import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
       addTodo: (state,action) => {
        state.todos.push({
            id: Date.now(),
            text: action.payload,
            completed:false
        })
       },
       toggleTodo: (state, action) => {
        const checkComplete = state.todos.find((todo) => todo.id === action.payload)
        if (checkComplete) {
            checkComplete.completed = !checkComplete.completed;
        }
       },
       removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) =>todo.id !== action.payload)
       }
    }
})

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer