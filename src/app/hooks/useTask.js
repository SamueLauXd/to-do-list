import { useState } from "react";

export function useTask() {
    const [tasks, setTasks] = useState([])

    const clearTasks = () => {setTasks([])}

    const handleSubmit = (e) => {{
        e.preventDefault()
        const newTask = {
            id: crypto.randomUUID(),
            title: e.target.task.value
        }
        const array = [...tasks]
        array.push(newTask)
        setTasks(array)
        console.log(array);
        formulario.reset()
    }}

    return {
        tasks,
        setTasks,
        clearTasks,
        handleSubmit
    }
}