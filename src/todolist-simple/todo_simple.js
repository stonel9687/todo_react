import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TodoSimple = () => {

    const [tarea, setTarea] = useState('')

    const [tasklist, setTaskList] = useState([])

    const handleChange = (e) => {
        setTarea(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        const id = new Date().getTime()
        const newTask = {
            id: id,
            task: tarea
        }
        const lista = tasklist.concat(newTask)

        setTaskList(lista)
        setTarea('')
    }

    const deleteTask = (item) => {
        const borrarTarea = tasklist.filter((tarea) => {
            return tarea !== item
        })
        setTaskList(borrarTarea)

    }

    return (
        <>
            <div className='container max-container'>
                <h1>TO DO LIST</h1>
                <div className="table table-striped ">
                    <div className='input-add'>
                        <div className="input-group mb-3">
                            <form onSubmit={addTask}>
                                <input required type="text" className="form-control " placeholder="Task" aria-label="Recipient's username" onChange={handleChange} value={tarea} />
                                <button className="btn btn-primary">Primary</button>
                            </form>
                        </div>
                        <div>
                            {tasklist.map((item) => {
                                return (
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            {item.task}
                                            <button type="button" class="btn btn-primary" onClick={() => { deleteTask(item) }}>borrar</button>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                        <Link to='/'>
                            <button type="button" className="btn btn-dark" >Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoSimple