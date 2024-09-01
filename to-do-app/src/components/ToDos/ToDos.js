import React, {useState,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addTodo, toggleTodo, removeTodo } from '../../redux/todolist/todoSlice'
import styles from "../ToDos/ToDos.module.css"

const ToDos = () => {
const [inputValue, setinputValue] = useState("")
const todos = useSelector((state) => state.todos.todos)
const dispatch = useDispatch();


const handleAddBtn = () => {
    dispatch(addTodo(inputValue))
    setinputValue("")
}

  return (
    <div>
      <h1>To do list</h1>
      <input
       type='text'
       value={inputValue}
       onChange={(e) => setinputValue(e.target.value)}
      />
      <button onClick={handleAddBtn}>Add item</button>
      <ul>
        {todos.map((el) => <li key={el.id} className={el.completed ? styles.complete : styles.notcomplete}>
          <span onClick={() => dispatch(toggleTodo(el.id))}>{el.text}</span>
          <button onClick={() => dispatch(removeTodo(el.id))}>Delete</button>
          </li>)}
      </ul>
    </div>
  )
}

export default ToDos
