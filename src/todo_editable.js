import React, { useState } from 'react'

const TodoEditable = () => {

    return (
        <>
            <div className='container max-container'>
                <h1>TO DO LIST</h1>
                <div className="table table-striped ">
                    <div className='input-add'>
                        <div>
                            <p>Nombre</p>
                        <input required type="text" className="form-control " placeholder="Recipient's username" aria-label="Recipient's username"/>
                        <p>Tarea</p>
                                <input required type="text" className="form-control " placeholder="Recipient's username" aria-label="Recipient's username"/>
                                <button className="btn btn-primary">Primary</button>
                        </div>
                        <div>
                                    <ul class="list-group">
                                    <p>Tarea 1</p>
                                    <p>Tarea 2</p>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <button type="button" class="btn btn-primary" >borrar</button>
                                            <button className="btn btn-primary">Editar</button> 
                                        </li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoEditable