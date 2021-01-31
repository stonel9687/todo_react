import React from 'react'
import { Link } from 'react-router-dom'

function Task(props) {

    const { handleTask, handleName, name, task, handlesubmmit } = props
    return (
        <form onSubmit={handlesubmmit}>
            <div>
                <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleName} value={name} />
                <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={task} />

                <button type="submit" className="button-add-ut btn btn-success">Agregar</button>

            </div>
        </form>
    )
}

export default Task