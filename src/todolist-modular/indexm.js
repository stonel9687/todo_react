import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import ListModular from './todolist-name'
import Task from './todolist-task'


const TodoModular = () => {
    
    const history = useHistory()

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
        history.push('/todolist-modular/todolist-task')
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
        history.push('/todolist-modular/todolist-name')

    }

    const changelist = (item, isChange) => {
        if (isChange === true) {
            deleteTask(item, true)
            const returnTask = prueba.concat(item)
            setPrueba(returnTask)

        } else {
            deleteTask(item, false)
            const newdone = workDone.concat(item)
            setWorkDone(newdone)
        }

    }
    return (
        <>
            <Task
                nombre={nombre}
                tarea={tarea}
                assignment={assignment}
                handleName={handleName}
                handleTask={handleTask}
            />

            <ListModular
                prueba={prueba}
                deleteTask={deleteTask}
                setEditTask={setEditTask}
                changelist={changelist}
                workDone={workDone}
                changelist={changelist}
                deleteTask={deleteTask}
            />
        </>

    )
}

export default TodoModular
