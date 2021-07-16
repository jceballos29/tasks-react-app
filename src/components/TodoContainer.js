import React, {useState, useEffect} from 'react'
import { getTasks } from '../services/getTasks'
import './TodoContainer.css'
import CreateContainer from './TodoContainer/CreateContainer'
import Title from './TodoContainer/Title'
import Todo from './TodoContainer/Todo'

function TodoContainer() {

    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const data = await getTasks()
            setTodos(data.todos)
        }
        getData();
    }, [])

    console.log(todos)
    
    return (
        <div className="TodoContainer">
            <Title/>
            <Todo/>
            <CreateContainer/>
        </div>
    )
}

export default TodoContainer
