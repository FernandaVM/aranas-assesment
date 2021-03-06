import React, {useState} from 'react'
import Todo from './Todo'
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

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){return}

        setTodos(prev => prev.map(item=>(item.id === todoId ? newValue : item)))
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)//create a new array with the elements that meets the condition. 
        setTodos(removeArr)
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){ //if the id matches the id of the element 'todo' then..
                todo.isComplete = !todo.isComplete //toggling between true and false
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>To Do List :D</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} completeTodo={completeTodo} />
        </div>
    )
}

export default TodoList
