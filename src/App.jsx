import React from 'react'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import './App.css'

const App = () => {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  )
}

export default App