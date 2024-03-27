export function TaskList({tasks, completeTask}) {
    const hasTasks = tasks.length > 0
    
    return (
        <>
            {
                hasTasks ?
                tasks.map(task => (
                    <li className="py-2 border-b" key={task.id}>
                    <label htmlFor={task.name}/>
                    <input className="mr-2" name={task.name} type="checkbox" onChange={() => completeTask(task.id)}/>{task.title}
                    </li>
                ))
                :
                    <p className="text-sm text-center py-4">You have no pending tasks</p>
            }
        </>
    )
}