import React, { useState } from 'react'

const TodoEditable = () => {

    return (
        <>
            <div className='container max-container'>
                <h1>TO DO LIST</h1>
                <div className="table table-striped ">
                    <div className='input-add'>
                        <div className="input-group mb-3">
                                <input required type="text" className="form-control " placeholder="Recipient's username" aria-label="Recipient's username"/>
                                <button className="btn btn-primary">Primary</button>
                        </div>
                        <div>
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            tarea 1
                                            <button type="button" class="btn btn-primary" >borrar</button>
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