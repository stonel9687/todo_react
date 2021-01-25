const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            nombre: '',
            tarea: '',
            taskList: [],
            setEdit: false,
            currentTask: {},
            workDone:[]
        },
        actions: {
            handleName: (e) => {
                setStore({ nombre: e.target.value })
            },

            handleTask: (e) => {
                setStore({ tarea: e.target.value })
            },

            assignment: (e) => {
                e.preventDefault()
                const store = getStore()
                if (store.setEdit) {
                    const store = getStore()
                    const newTasklist = store.taskList.map((item) => {
                        if (item.id === store.currentTask.id) {
                            const newTask = {
                                id: store.currentTask.id,
                                name: store.nombre,
                                task: store.tarea,
                                date: store.currentTask.date
                            }
                            return newTask
                        } else {
                            return item
                        }
                    })
                    setStore({
                        taskList: newTasklist,
                        nombre: '',
                        tarea: '',
                        isEdit: false,
                        currentTask: {}
                    })
                } else {
                    const store = getStore()
                    const id = new Date().getTime()
                    const fecha = new Date()
                    console.log(fecha)
                    const newTask = {
                        id: id,
                        name: store.nombre,
                        task: store.tarea,
                        date: fecha.toString()
                    }

                    const todolist = store.taskList.concat(newTask)
                    setStore({
                        taskList: todolist,
                        nombre: '',
                        tarea: ''
                    })
                }
            },
            deleteTask: (item, isDone) => {
                const store = getStore()
                if (isDone === true) {
                    const borrarTrabajo = store.taskList.filter((tarea) => {
                        return tarea.id !== item.id
                    })
                    setStore({
                        taskList: borrarTrabajo
                    })
                } else {
                    const borrarTarea = store.taskList.filter((tarea) => {
                        return tarea.id !== item.id
                    })
                    setStore({
                        taskList: borrarTarea
                    })
                }
            },


            setEditTask: (task) => {
                const store = getStore()
                setStore({
                    nombre: '',
                    tarea: '',
                    setEdit: true,
                    currentTask: task
                })
            },

            changelist: (item, isChange) => {
                const store = getStore()
                const actions=getActions()
                if (isChange === true) {
                    actions.deleteTask(item, true)
                    const returnTask = store.taskList.concat(item)
                    setStore({
                        taskList:returnTask
                    })
                } else {
                    actions.deleteTask(item, false)
                    const newdone = store.workDone.concat(item)
                    setStore({
                        workDone:newdone
                    })
                }

            }
        }
    }
}
export default getState