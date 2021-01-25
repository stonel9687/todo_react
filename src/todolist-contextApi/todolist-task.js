import React,{useContext} from 'react'
import { Context } from '../store/appContex'
const Task = () => {
    const { store, actions } = useContext(Context)
    return(
        <>
            <div className='container'>
                <h1 className='font-white'>TO DO LIST</h1>
                <div className="table table-striped ">
                    <div className='input-add container'>
                        <div>
                            <form onSubmit={actions.assignment}>
                                <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={actions.handleName} value={store.nombre} />
                                <input required type="text" className="form-control " placeholder="Tarea" aria-label="Recipient's username" onChange={actions.handleTask} value={store.tarea} />
                                <button type='submit' className="btn btn-primary btn-lg btn-block">Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task
