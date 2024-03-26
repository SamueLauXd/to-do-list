import { useState } from "react";

export function useTask() {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    const clearTasks = () => {setCompletedTasks([])}

    const completeTask = (id) => {
        setTimeout(() => {
            //agregar a las completadas
            const completed = tasks.filter(task => task.id === id)
            setCompletedTasks(prev => [...prev, completed[0]])

            //--------------------------

            //eliminar de las pendientes
            setTasks(tasks.filter(task => task.id !== id))
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
    }}

    return {
        tasks,
        clearTasks,
        handleSubmit,
        completeTask,
        completedTasks
    }
}