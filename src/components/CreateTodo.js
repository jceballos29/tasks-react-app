import React from 'react'
import '../css/CreateTodo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CreateTodo({ register, handleSubmit, handleCreateTask, handleCreateTaskButton }) {


    return (
        <div className="CreateTodo">
            <div className="Container">
                <FontAwesomeIcon className="Close" icon={faTimes} onClick={() => handleCreateTaskButton(false)} />
                <form className="Form" onSubmit={handleSubmit(handleCreateTask)}>
                    <div className="Entries">
                        <label>
                            Task
                            <input type="text" {...register('task', { required: true })} />
                        </label>
                        <label>
                            Student
                            <input type="text" {...register('student', { required: true })} />
                        </label>
                    </div>
                    <button>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo
