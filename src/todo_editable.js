import React, { useState } from 'react'

const TodoEditable = () => {

    const [nombre, setNombre] = useState('')
    const [tarea, setTarea] = useState('')
    const [prueba, setPrueba] = useState([])

    const handleName = (e) => {
        setNombre(e.target.value)
        console.log(nombre)
    }

    const handleTask = (e) => {
        setTarea(e.target.value)
        console.log(tarea)
    }

    const assignment = (e) => {
        e.preventDefault()
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
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Agregar</button>
                            </form>
                        </div>
                        <div>
                            {prueba.map((item) => {
                                return (
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <p>Asignado a {item.name} , Tarea a Realizar {item.task}</p>
                                            <button type="button" className="btn btn-danger" onClick={() => { deleteTask(item) }}>Borrar</button>
                                            <button type="button" className="btn btn-success" >Editar</button>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoEditable