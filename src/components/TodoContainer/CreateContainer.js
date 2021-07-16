import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function CreateContainer() {
    return (
        <div className="CreateContainer">
            <button><FontAwesomeIcon icon={faPlus} size="2x"/></button>
        </div>
    )
}

export default CreateContainer
