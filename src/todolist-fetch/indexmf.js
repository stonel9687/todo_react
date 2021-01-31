import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'

import Navbar from './navbar'
import Login from './login'
import Task from './task'
import TaskList from './task-list'

function TodoModularFetch() {
    const history = useHistory()
    const [dataList, setDataList] = useState([])
    const [taskDone, setTaskDone] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [taskToEdit, setTaskToEdit] = useState(undefined)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handlesubmmit = (e) => {
        e.preventDefault()
        if (taskToEdit !== undefined) {
            const editTask = {
                assignedTo: name,
                task: task
            }
            fetch(`https://crud-placeholder.herokuapp.com/api/v1/put_todoList/${taskToEdit._id}`, {
                method: "PUT",
                body: JSON.stringify(editTask),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    setName('')
                    setTask('')
                    setTaskToEdit(undefined)
                    history.push('/todolist-fetch/TaskList')
                    showTask()
                })
                .catch((error) => console.log('Error:', error));
        } else {
            const date = new Date()
            const newtask = {
                assignedTo: name,
                createdAt: date,
                task: task
            }
            fetch('https://crud-placeholder.herokuapp.com/api/v1/post_todoList/', {
                method: "POST",
                body: JSON.stringify(newtask),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    setName('')
                    setTask('')
                    history.push('/todolist-fetch/TaskList')
                    showTask()
                })
                .catch((error) => console.log('Error:', error));
        }
    }

    const showTask = () => {
        fetch('https://crud-placeholder.herokuapp.com/api/v1/get_all_todoList/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => { return resp.json() })
            .then(data => {
                setDataList(data.tasks)
                setTaskDone(data.tasks)
            })
            .catch(error => console.log('Error:', error));
    }

    const deleteTask = (item) => {
        fetch(`https://crud-placeholder.herokuapp.com/api/v1/delete_one_todoList/${item._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.status === 'error') {
                    alert('Intentalo Nuevamente')
                } else {
                    showTask()
                }
            })
            .catch((error) => console.log('Error:', error));
    }

    const setEditTask = (item) => {
        history.push('/todolist-fetch/Task')
        setName(item.assignedTo)
        setTask(item.task)
        setTaskToEdit(item)
    }

    const setToDone = (item, back ) => {
        const isDone = {
            completed: back
        }
        fetch(`https://crud-placeholder.herokuapp.com/api/v1/put_todoList/${item._id}`, {
            method: "PUT",
            body: JSON.stringify(isDone),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                showTask()
            })
            .catch((error) => console.log('Error:', error));
    }

    useEffect(() => {
        showTask()
    }, [])

    return (
        <>
            <Navbar />
            <div className='div-list mx-auto mt-5 todolist-bg'>
                <Link to='/'>
                    <button type="button" className="btn btn-secondary mb-3">Back to home</button>
                </Link>
                <Switch>
                    < Route path='/todolist-fetch/Task'>
                        <Task
                            name={name}
                            task={task}
                            handleName={handleName}
                            handleTask={handleTask}
                            handlesubmmit={handlesubmmit}
                        />
                    </Route>
                    < Route path='/todolist-fetch/TaskList'>
                        <TaskList
                            dataList={dataList}
                            taskDone={taskDone}
                            deleteTask={deleteTask}
                            setEditTask={setEditTask}
                            setToDone={setToDone}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default TodoModularFetch