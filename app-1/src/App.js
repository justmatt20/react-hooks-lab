import React, {useState} from 'react';
import List from './components/List';
import AddTodo from './components/AddTodo'
import './App.css'


export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(item) {
    const addedTodos = [...todos, item]
    setTodos(addedTodos)
  }
  return(
    <div className="app">
      <AddTodo  addTodo={addTodo}/>
      <List className="list" list={todos} />
    </div>
  )
}