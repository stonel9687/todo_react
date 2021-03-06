import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div class="btn-group-vertical">
                <h1 className='text-success'>Ejercicios ToDoList</h1>
                <Link to='/todolist-simple/todo_simple' className='w-100'>
                    <button className="btn btn-success my-2 w-100">
                        TodoList simple </button>
                </Link>
                <Link to='/todolist-editable/todo_editable' className='w-100'>
                    <button className="btn btn-primary my-2 w-100">
                        TodoList Editable</button>
                </Link>
                <Link to='/todolist-usehistory/todolist-task' className='w-100'>
                    <button class="btn btn-warning my-2 w-100">
                        TodoList useHistory</button>
                </Link>
                <Link to='/todolist-modular/todolist-task' className='w-100'>
                    <button class="btn btn-secondary my-2 w-100">
                        TodoList Modular & ContexApi</button>
                </Link>
                <Link to='/todolist-fetch/Login' className='w-100'>
                    <button class="btn btn-warning my-2 w-100">
                        TodoList modular fetch</button>
                </Link>
            </div>
        </div>

    )
}

export default Home