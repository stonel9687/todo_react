import React from 'react'
import { Link } from 'react-router-dom'

function TaskList(props) {

    const { dataList, taskDone, deleteTask, setEditTask, setToDone} = props

    return (
        <>
            <Link to='/todolist-fetch/Task'>
                <button type="submit" className="button-add-ut btn btn-success">Crear Tarea</button>
            </Link>
            <div className='d-flex justify-content-between'>
                <div className='mt-4 div-user-task'>
                    <h6 className='ml-20'>Por hacer</h6>
                    {dataList.map((item) => {
                        return (
                            <>
                                {item.completed === false &&
                                    <>
                                        <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                                            <div className="form-check">
                                                <label className="form-check-label" for="defaultCheck1">
                                                    <p><stron>Asignado a: </stron>{item.assignedTo}</p>
                                                    <p><stron>Fecha: </stron>{item.createdAt}</p>
                                                    <p><stron>Tarea: </stron>{item.task}</p>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button type="button" className="btn btn-danger" onClick={() => { deleteTask(item) }}>Borrar</button>
                                            <button type="button" className="btn btn-primary ml-1" onClick={() => { setEditTask(item) }}>Editar</button>
                                            <button type="button" className="btn btn-success ml-1" onClick={() => { setToDone(item,true) }}>Hecho</button>
                                        </div>
                                    </>
                                }
                            </>
                        )
                    })}
                </div>
                <div className='mt-4 div-user-task'>
                    <h6 className='ml-20'>Hecho</h6>
                    {taskDone.map((item) => {
                        return (
                            <>
                                {item.completed === true &&
                                    <>
                                        <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                                            <div className="form-check">
                                                <label className="form-check-label" for="defaultCheck1">
                                                    <p><stron>Asignado a: </stron>{item.assignedTo}</p>
                                                    <p><stron>Fecha: </stron>{item.createdAt}</p>
                                                    <p><stron>Tarea: </stron>{item.task}</p>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button type="button" className="btn btn-danger" onClick={() => { deleteTask(item) }}>Borrar</button>
                                            <button type="button" className="btn btn-primary ml-1" onClick={() => { setToDone(item,false) }}>Volver</button>
                                        </div>
                                    </>}
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )

}

export default TaskList
