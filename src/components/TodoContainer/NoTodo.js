import React from 'react'

import empty from '../../img/empty.svg'

function NoTodo() {
    return (
        <div className="NoTodo">
            <img src={empty} alt="Empty" width="40%"/>
            <h2>No registered tasks</h2>
        </div>
    )
}

export default NoTodo
