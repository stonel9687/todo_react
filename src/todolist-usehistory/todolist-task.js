import React from 'react'
import { Link } from 'react-router-dom'

const Task = (props) => {

    const { assignment, handleName, handleTask, nombre, tarea } = props

    return (
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
                        <Link to='/todolist-usehistory/todolist-name'>
                            <button type="button" className="btn btn-success btn-lg btn-block" >Ir a Lista de Tareas</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
