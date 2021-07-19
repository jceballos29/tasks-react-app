import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateContainer({ handleCreateTaskButton }) {
    return (
        <div className="CreateContainer">
            <button onClick={() => handleCreateTaskButton(true)}><FontAwesomeIcon icon={faPlus} size="2x" /></button>
        </div>
    )
}

export default CreateContainer
