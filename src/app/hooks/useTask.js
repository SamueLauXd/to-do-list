import { useEffect, useState } from "react";

export function useTask() {

    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    
    useEffect(() => {
        setTasks(getLocalStorage("pending")) || []
        setCompletedTasks(getLocalStorage("completed")) || []
    }, [])

    const updateLocalStorage = (key, state) => {
            return typeof window !== "undefined" ? window.localStorage.setItem(key, JSON.stringify(state)) : undefined
    }

    const getLocalStorage = (key) => {
            return typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem(key)) : undefined
    }


    const clearTasks = () => { 
        setCompletedTasks([])
        updateLocalStorage("completed", [])
    }

    const completeTask = (id) => {
        setTimeout(() => {
            //agregar a las completadas
            const completed = tasks.filter(task => task.id === id)
            setCompletedTasks(prevState => {
                const updatedCompletedTasks = [...prevState, ...completed.slice(0, 1)];
                updateLocalStorage("completed", updatedCompletedTasks)
                return updatedCompletedTasks;
            });

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