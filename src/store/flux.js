const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            name: '',
            task: '',
            taskList: [],
            setEdit: false,
            currentTask: {},
            workDone: []
        },
        actions: {
            handleName: (e) => {
                setStore({ name: e.target.value })
            },

            handleTask: (e) => {
                setStore({ task: e.target.value })
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
                                name: store.name,
                                task: store.task,
                                date: store.currentTask.date
                            }
                            return newTask
                        } else {
                            return item
                        }
                    })
                    setStore({
                        taskList: newTasklist,
                        name: '',
                        task: '',
                        isEdit: false,
                        currentTask: {}
                    })
                } else {
                    const store = getStore()
                    const id = new Date().getTime()
                    const fecha = new Date()
                    const newTask = {
                        id: id,
                        name: store.name,
                        task: store.task,
                        date: fecha.toString()
                    }
                    const todolist = store.taskList.concat(newTask)
                    setStore({
                        taskList: todolist,
                        name: '',
                        task: ''
                    })
                }
            },
            deleteTask: (item, isDone) => {
                const store = getStore()
                if (isDone === true) {
                    const borrarTrabajo = store.workDone.filter((task) => {
                        return task.id !== item.id
                    })
                    setStore({
                        workDone: borrarTrabajo
                    })
                } else {
                    const borrarTarea = store.taskList.filter((task) => {
                        return task.id !== item.id
                    })
                    setStore({
                        taskList: borrarTarea
                    })
                }
            },

            setEditTask: (item) => {
                console.log(item)
                setStore({
                    name: item.name,
                    task: item.task,
                    setEdit: true,
                    currentTask: item
                })
            },

            changelist: (item, isChange) => {
                const store = getStore()
                const actions = getActions()
                console.log(item)
                if (isChange === true) {
                    actions.deleteTask(item, isChange)
                    const returnTask = store.taskList.concat(item)
                    setStore({
                        taskList: returnTask
                    })
                } else {
                    actions.deleteTask(item, isChange)
                    const newdone = store.workDone.concat(item)
                    setStore({
                        workDone: newdone
                    })
                }
            }
        }
    }
}
export default getState