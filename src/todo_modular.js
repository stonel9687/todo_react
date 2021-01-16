import React, { useState } from 'react'

const TodoModular = () => {

    const [nombre, setNombre] = useState('')
    const [tarea, setTarea] = useState('')
    const [prueba, setPrueba] = useState([])
    const [edit, setEdit] = useState(false)
    const [currentTask, setCurrentTask] = useState({})
    const [workDone, setWorkDone] = useState([])

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
                        task: tarea,
                        date: currentTask.date
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
            const fecha = new Date()
            console.log(fecha)
            const newTask = {
                id: id,
                name: nombre,
                task: tarea,
                date: fecha.toString()
            }

            const todolist = prueba.concat(newTask)
            setPrueba(todolist)
            setTarea('')
            setNombre('')

        }

    }
    const deleteTask = (item, isDone) => {
        if (isDone === true) {
            const borrarTrabajo = workDone.filter((tarea) => {
                return tarea !== item
            })
            setWorkDone(borrarTrabajo)
        } else {
            const borrarTarea = prueba.filter((tarea) => {
                return tarea !== item
            })
            setPrueba(borrarTarea)

        }

    }


    const setEditTask = (task) => {
        setNombre(task.name)
        setTarea(task.task)
        setEdit(true)
        setCurrentTask(task)

    }

        const changelist = (item, isChange) => {
            if (isChange === true) {
                    deleteTask(item,true)
                    const returnTask = prueba.concat(item)
                    setPrueba(returnTask)
                
            } else {
                deleteTask(item,false)
                const newdone = workDone.concat(item)
                setWorkDone(newdone)
            }

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
                        </div>
                    </div>
                </div>
                <div className='d-flex container max-container'>
                    <div className="card bg-light mb-3" style={{ width: '18rem' }}>
                        <div className="card-header">Por Hacer</div>
                        {prueba.map((item => {
                            return (
                                <>
                                    <div className="card-body">
                                        <p className="card-text">
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Nombre:{item.name}

                                                </li>
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    tarea: {item.task}
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    Fecha: {item.date}

                                                </li>
                                            </ul>
                                            <button type="button" class="btn btn-danger" onClick={() => { deleteTask(item, false) }} >Delete</button>
                                            <button type="button" class="btn btn-primary" onClick={() => setEditTask(item)}>Edit</button>
                                            <button type="button" class="btn btn-success" onClick={() => { changelist(item,false) }}>Done</button>
                                        </p>
                                        <hr></hr>
                                    </div>
                                </>
                            )
                        }))}

                    </div>

                    <div className="card bg-light mb-3" style={{ width: '18rem' }}>
                        <div className="card-header">Hecho</div>
                        {workDone.map((item) => {
                            return (
                                <div className="card-body">
                                    <p className="card-text">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Nombre:{item.name}

                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                tarea:  {item.task}
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Fecha: {item.date}

                                            </li>
                                        </ul>
                                        <button type="button" class="btn btn-primary" onClick={() => { changelist(item, true) }}>ToDo</button>
                                        <button type="button" class="btn btn-danger" onClick={() => { deleteTask(item, true) }}>eliminar</button>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    export default TodoModular
