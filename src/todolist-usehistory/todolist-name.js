import React from 'react'
import { Link } from 'react-router-dom'

const ListModular = (props) => {

    const { prueba, deleteTask, setEditTask, changelist, workDone } = props
    return (
        <>

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
                                        <button type="button" class="btn btn-danger" onClick={() => { deleteTask(item, false) }}>Delete</button>
                                        <button type="button" class="btn btn-primary" onClick={() => setEditTask(item)}>Edit</button>
                                        <button type="button" class="btn btn-success" onClick={() => { changelist(item, false) }}>Done</button>
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
            <Link to='/todolist-usehistory/todolist-task'>
                <button type="button" className="btn btn-primary btn-lg btn-block" >Agregar Nueva Tarea</button>
            </Link>
            <Link to='/'>
                <button type="button" className="btn btn-secondary btn-lg btn-block" >Volver</button>
            </Link>
        </>
    )
}

export default ListModular
