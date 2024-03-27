import { useState } from "react";

export function useTask() {

    let initialTasks
    if (typeof window !== 'undefined') {
        initialTasks = JSON.parse(window.localStorage.getItem("pending"))
    }

    const initialCompleted = []

    const [tasks, setTasks] = useState(initialTasks)
    const [completedTasks, setCompletedTasks] = useState(initialCompleted)

    const updateLocalStorage = (key, state) => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }

    const clearTasks = () => {
        setCompletedTasks([])
    }

    const completeTask = (id) => {
        setTimeout(() => {
            //agregar a las completadas
            const completed = tasks.filter(task => task.id === id)
            setCompletedTasks(prev => [...prev, completed[0]])

            //eliminar de las pendientes
            const eliminate = tasks.filter(task => task.id !== id)
            setTasks(eliminate)
            updateLocalStorage("pending", eliminate)
        }, 200)
    }

    const handleSubmit = (e) => {{
        e.preventDefault()
        const newTask = {
            id: crypto.randomUUID(),
            title: e.target.task.value
        }
        const array = [...tasks]
        array.push(newTask)
        setTasks(array)
        formulario.reset()
        updateLocalStorage("pending", array)
    }}

    return {
        tasks,
        clearTasks,
        handleSubmit,
        completeTask,
        completedTasks
    }
}