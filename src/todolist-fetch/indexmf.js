import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'

import Navbar from './navbar'
import Login from './login'
import Task from './task'
import TaskList from './task-list'
import Register from './register'

function TodoModularFetch() {
    const history = useHistory()
    const [dataList, setDataList] = useState([])
    const [taskDone, setTaskDone] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [taskToEdit, setTaskToEdit] = useState(undefined)
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeRetryPass = (e) => {
        setRepeatPass(e.target.value)
    }

    const handlePass = (e) => {
        e.preventDefault()
        const newRegister = {
            name: name,
            email: mail,
            phone: phone,
            password: password
        }
        if (password === repeatPass) {
            fetch('https://crud-placeholder.herokuapp.com/api/v1/post_user/', {
                method: "POST",
                body: JSON.stringify(newRegister),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    if (data.status === 'error') {
                        alert('Usuario Registrado')
                    } else {
                        setName('')
                        setMail('')
                        setPhone('')
                        setPassword('')
                        history.push('/todolist-fetch/login')
                    }
                })
                .catch((error) => console.log('Error:', error));
        } else {
            alert('Las Contraseñas no coinciden')
        }

    }

    const handleSingin = (e) => {
        e.preventDefault()
        const userLog = {
            email: mail,
            password: password
        }
        fetch('https://crud-placeholder.herokuapp.com/api/v1/login_user/', {
            method: "POST",
            body: JSON.stringify(userLog),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.status === 'error') {
                    alert('Usuario no Existe')
                    setMail('')
                    setPassword('')
                } else {
                    setMail('')
                    setPassword('')
                    history.push('/todolist-fetch/TaskList')
                    showTask()
                }
            })
            .catch((error) => console.log('Error:', error));
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

    const setToDone = (item, back) => {
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
                <Route path='/todolist-fetch/Login'>
                    <Login
                        mail={mail}
                        password={password}
                        handleChangeMail={handleChangeMail}
                        handleSingin={handleSingin}
                        handleChangePass={handleChangePass}
                    />
                </Route>
                <Route path='/todolist-fetch/Register'>
                    <Register
                        handlePass={handlePass}
                        handleName={handleName}
                        handleChangeMail={handleChangeMail}
                        handleChangePhone={handleChangePhone}
                        handleChangePass={handleChangePass}
                        handleChangeRetryPass={handleChangeRetryPass}
                        password={password}
                        phone={phone}
                        mail={mail}
                        name={name}
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
        </>
    )
}

export default TodoModularFetch