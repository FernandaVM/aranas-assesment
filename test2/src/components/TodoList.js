import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    //set todos empty array
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        //Make sure typed a letter
        //Regular exp. ^ beginning of the string  \s whitespace  * quiatifier(match 0 or +)   $ end of the string
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]; //(…) "spread operator" expands an array into a list. Merging objects.

        setTodos(newTodos);

    }

    return (
        <div>
            <h1>To Do List :D</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
