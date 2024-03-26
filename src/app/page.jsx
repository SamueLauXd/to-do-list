'use client'

import { Trash2 } from "lucide-react";
import { useTask } from "./hooks/useTask";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { CompletedTaskList } from "./components/CompletedTaskList";

export default function Home() {

  const {tasks, clearTasks, handleSubmit, completeTask, completedTasks} = useTask()
  const hasCompletedTasks = completedTasks.length > 0

  return (
    <main className="flex justify-center p-2 md:p-24">
      <article className="rounded-xl bg-white dark:bg-[rgb(44,44,46)] p-4 w-full md:max-w-[400px]">

        <div className="py-2 border-b flex justify-between items-center">
          <h1 className="font-bold text-[19pt] md:text-[25pt]">To Do List</h1>
          <button onClick={clearTasks} className="text-[rgb(142,142,147)] dark:text-[rgb(142,142,147)] hover:text-[rgb(255,59,48)] transition-color ease-in duration-300"><Trash2 size={24}/></button>
        </div>

        <Form handleSubmit={handleSubmit}/>

        <ul className="flex flex-col-reverse">
          <TaskList tasks={tasks} completeTask={completeTask}/>
        </ul>

          {hasCompletedTasks ? <h1 className="font-bold text-xl py-2">Completed</h1> : <></>}
        <ul className="flex flex-col-reverse">
          <CompletedTaskList completedTasks={completedTasks}/>
        </ul>
        
      </article>
    </main>
  );
}
