import React from 'react'
import { Link } from 'react-router-dom'
import Lista from './todolist-m'
import Task from './todolist-task'

const TodoContext = () => {
    return (
        <>
            <Link to='/'>
                <button type="button" className="btn " >Volver</button>
            </Link>
            <Lista />
            <Task />
        </>
    )
}

export default TodoContext
