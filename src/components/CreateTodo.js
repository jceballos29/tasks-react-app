import React from 'react'

function CreateTodo({register, handleSubmit, handleCreateTask}) {


    return (
        <div>
            <form onSubmit={handleSubmit(handleCreateTask)}>
                <label>
                    Task: 
                    <input type="text" {...register('task', {required: true})}/>
                </label>
                <label>
                    Student: 
                    <input type="text" {...register('student', {required: true})}/>
                </label>
                <button>Create Task</button>
            </form>
            
        </div>
    )
}

export default CreateTodo
