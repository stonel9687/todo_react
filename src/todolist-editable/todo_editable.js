import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const TodoEditable = () => {
    const history = useHistory()

    const [nombre, setNombre] = useState('')
    const [tarea, setTarea] = useState('')
    const [prueba, setPrueba] = useState([])
    const [edit, setEdit] = useState(false)
    const [currentTask, setCurrentTask] = useState({})

    const handleName = (e) => {
        setNombre(e.target.value)
    }

    const handleTask = (e) => {
        setTarea(e.target.value)
    }

    const assignment = (e) => {
        e.preventDefault()
        if (edit) {
            const newTasklist = prueba.map((item) => {
                if (item.id === currentTask.id) {
                    const newTask = {
                        id: currentTask.id,
                        name: nombre,
                        task: tarea
                    }
                    return newTask
                } else {
                    return item
                }
            })
            setPrueba(newTasklist)
            setEdit(false)
            setTarea('')
            setNombre('')
            setCurrentTask({})
        } else {
            const id = new Date().getTime()
            const newTask = {
                id: id,
                name: nombre,
                task: tarea
            }

            const todolist = prueba.concat(newTask)
            setPrueba(todolist)
            setTarea('')
            setNombre('')

        }

    }
    const deleteTask = (item) => {
        const borrarTarea = prueba.filter((tarea) => {
            return tarea !== item
        })
        setPrueba(borrarTarea)
    }

    const setEditTask = (task) => {
        setNombre(task.name)
        setTarea(task.task)
        setEdit(true)
        setCurrentTask(task)

    }
    return (
        <>

            <div className='container'>
                <h1 className='font-white'>TO DO LIST</h1>
                <div className="table table-striped ">
                    <div className='input-add container'>
                        <div>
                            <form onSubmit={assignment}>
                                <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={handleName} value={nombre} />
                                <input required type="text" className="form-control " placeholder="Tarea" aria-label="Recipient's username" onChange={handleTask} value={tarea} />
                                <button type='submit' className="btn btn-primary btn-lg btn-block">Agregar</button>
                            </form>
                        </div>
                        <div>
                            {prueba.map((item) => {
                                return (
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <p>Asignado a {item.name} , Tarea a Realizar {item.task}</p>
                                            <button type="button" className="btn btn-danger" onClick={() => { deleteTask(item) }}>Borrar</button>
                                            <button type="button" className="btn btn-success" onClick={() => setEditTask(item)}>Editar</button>

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

export default TodoEditable