import React, {useState, useEffect,useRef} from 'react'

function TodoForm(props) {
    //input - function to update the value
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus() //allow to focus in whatever put as the ref
    })

    const handleChange = e => {
        setInput(e.target.value); //Access to the field value and set it
    }

    const handleSubmit = e => {
        e.preventDefault(); 
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), //Generate a random number within 10000 or less
            text: input
        });
        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="" placeholder="Add a to-do" value={input} name="text" className='todo-input' onChange={handleChange} ref={inputRef}/>
            <button className="todo-button">Add to-do</button>
        </form>
    )
}

export default TodoForm
