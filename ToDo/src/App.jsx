import { useEffect, useState } from 'react'
import Todos from './components/Todos'
import Formulario from './components/Formulario'

const initialStateTodo = JSON.parse(localStorage.getItem('todos')) || []

function App() {
  const [todos, setTodos] = useState(initialStateTodo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if(todo.id === id){
        todo.state = !todo.state
      }
      return todo
    });
    setTodos(newArray)
  }

  const orderTodo = arrayTodos => {
    return arrayTodos.sort((a,b) => {
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })
  }

  console.log(todos)

  return (
    <div className='container mb-2'>
      <h1 className='my-5'>Formulario</h1>
      <Formulario addTodo={addTodo}/>
      <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App
