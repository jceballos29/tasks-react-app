import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import './css/App.css';
import CreateTodo from './components/CreateTodo';
import TodoContainer from './components/TodoContainer';
import { completeTask } from './services/completeTask';
import { createTask } from './services/createTask';
import { deleteTask } from './services/deleteTask';

function App() {

  const {register, handleSubmit, reset} = useForm();
  const [newTask, setNewTask] = useState(false)
  const [renderTasks, setRenderTasks] = useState(false)

  const handleCreateTaskButton = (value) => {
    setNewTask(value)
  }

  const onCreateTask = (data) => {
    const createData = async () => {
      await createTask(data);
      reset(); 
      setRenderTasks(true)
    }
    createData();
    setRenderTasks(false)
    setNewTask(false)
  }

  const onDeleteTask = (id) => {
    const deleteData = async () => {
      await deleteTask(id)
      setRenderTasks(true)
    }
    deleteData();
    setRenderTasks(false)
  }

  const onCompleteTask = (id,data) => {
    data.isCompleted = !data.isCompleted
    const completeData = async () => {
      await completeTask(id, data)
      setRenderTasks(true)
    }
    completeData()
    setRenderTasks(false)
  }

  return (
    <div className="App">
      <h1>TASK APP</h1>
      <TodoContainer 
        render={renderTasks} 
        handleCreateTaskButton={handleCreateTaskButton}
        handleDelteTask={onDeleteTask}
        handleCompleteTask={onCompleteTask}
      />
      {
        newTask  
        ? <CreateTodo
        handleCreateTask={onCreateTask}
        register = {register}
        handleSubmit={handleSubmit}
        renderTasks={renderTasks}
        handleCreateTaskButton={handleCreateTaskButton}
        />
        : ''
      }

    </div>
  );
}

export default App;
