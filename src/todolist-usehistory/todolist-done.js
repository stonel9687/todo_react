import React from 'react'

const Done = (props) => {

    const { workDone, changelist, deleteTask } = props
    return (
        <>
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
        </>
    )
}

export default Done
