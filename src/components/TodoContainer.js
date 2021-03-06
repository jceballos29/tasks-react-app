import React, { useState, useEffect } from 'react'
import { getTasks } from '../services/getTasks'
import '../css/TodoContainer.css'
import CreateContainer from './TodoContainer/CreateContainer'
import NoTodo from './TodoContainer/NoTodo'
import Todo from './TodoContainer/Todo'
import TodoItem from './TodoItem'

function TodoContainer({ render, handleCreateTaskButton, handleDelteTask, handleCompleteTask }) {
    const [renderTasks, setRenderTasks] = useState(true)
    const [todos, setTodos] = useState([]);

    const tasksList = todos.map((value) => (
        <TodoItem
            key={value.id}
            id={value.id}
            task={value.task}
            student={value.student}
            isCompleted={value.isCompleted}
            handleDelteTask={handleDelteTask}
            handleCompleteTask={handleCompleteTask}
        />
    ));

    const upcoming = todos.filter(value => value.isCompleted === false);
    const finished = todos.filter(value => value.isCompleted === true);

    const renderTodo = () => {
        if (todos.length === 0) {
            return <NoTodo />
        } else {
            return <Todo tasksList={tasksList} />
        }
    }

    useEffect(() => {
        setRenderTasks(render)
    }, [render])

    useEffect(() => {
        if (renderTasks) {
            const getData = async () => {
                const data = await getTasks()
                setTodos(data.todos)
            }
            getData();
            setRenderTasks(false);
        }
    }, [renderTasks])

    return (
        <div className="TodoContainer">
            <div className="TypeTask">
                <h3 className="upcoming">Upcoming: {upcoming.length}</h3>
                <h3 className="finished">Finished: {finished.length}</h3>
            </div>
            {renderTodo()}
            <CreateContainer handleCreateTaskButton={handleCreateTaskButton} />
        </div>
    )
}

export default TodoContainer
