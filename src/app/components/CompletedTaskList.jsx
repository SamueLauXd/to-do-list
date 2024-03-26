export function CompletedTaskList({completedTasks}) {
    const hasTasks = completedTasks.length > 0
    return(
        <>
            {
                hasTasks ?
                completedTasks.map((task) => <li className="p-2 rounded-md bg-[rgb(242,242,247)] dark:bg-[rgb(28,28,30)]" key={task.id}>{task.title}</li>)
                :
                <></>
            }
        </>
    )
}
