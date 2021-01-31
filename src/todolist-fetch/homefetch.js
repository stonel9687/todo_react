import React from 'react'
import { Link } from "react-router-dom"
import ListModularFetch from './task-list'
import Task from './task'
import TaskList from './task-list'


const TodoModularFetch= () => {

    return (
        <>
        
            <Task
            />
            <TaskList
            />
        </>
    )
}

export default TodoModularFetch