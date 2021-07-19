import React, {useState, useEffect} from 'react'
import { getTasks } from '../services/getTasks'
import './TodoContainer.css'
import CreateContainer from './TodoContainer/CreateContainer'
import Todo from './TodoContainer/Todo'
import TodoItem from './TodoItem'

function TodoContainer({render,handleCreateTaskButton,handleDelteTask, handleCompleteTask}) {
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
            <Todo tasksList={tasksList}/>
            <CreateContainer handleCreateTaskButton={handleCreateTaskButton}/>
        </div>
    )
}

export default TodoContainer
