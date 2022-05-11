import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([])
    
    const addTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        // console.log(...todos);
    }


    const updatedTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
    }


    const removeTodo = id => {
        const nremovearr = [...todos].filter(todo => todo.id !== id)
        setTodos(nremovearr)
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodo)
    }
  return (
    <div>
        <h1>Whats the plan for today</h1>
        <TodoForm onSubmit={addTodos}/>
        <Todo
        todos = {todos}
        completeTodo = {completeTodo}
        removeTodo = {removeTodo}
        updatedTodo = {updatedTodo}
         />
    </div>
  )
}

export default TodoList