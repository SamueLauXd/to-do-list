'use client'

import { Trash2 } from "lucide-react";
import { useTask } from "./hooks/useTask";

export default function Home() {

  const {tasks, clearTasks, handleSubmit} = useTask()
  const hasTasks = tasks.length > 0

  return (
    <main className="flex justify-center p-2 md:p-24">
      <article className="rounded-xl bg-white dark:bg-[rgb(44,44,46)] p-4 w-full md:max-w-[400px]">
        <div className="py-2 border-b flex justify-between items-center">
          <h1 className="font-bold text-[19pt] md:text-[25pt]">To Do List</h1>
          <button onClick={clearTasks} className="text-[rgb(142,142,147)] dark:text-[rgb(142,142,147)] hover:text-[rgb(255,59,48)] transition-color ease-in duration-300"><Trash2 size={24}/></button>
        </div>
        <form id="formulario" onSubmit={handleSubmit} className="py-2 flex justify-between items-center gap-4 text-sm">
          <input required name="task" className="px-2 py-1 bg-[rgb(242,242,247)] dark:bg-[rgb(28,28,30)] rounded-md w-full hover:bg-[rgb(199,199,204)] transition-color ease-in duration-300 border border-transparent active:border-[rgb(242,242,247)]" type="text" placeholder="Walk the dog..." />
          <button className="px-2 py-1 bg-[rgb(242,242,247)] dark:bg-[rgb(28,28,30)] font-medium rounded-md hover:bg-[rgb(199,199,204)] transition-color ease-in duration-300">Create</button>
        </form>
        <ul className="flex flex-col-reverse">
          {
            hasTasks ?
            tasks.map(task => (
                <li className="py-2 border-b" key={task.id}>{task.title}</li>
              ))
            :
            <p className="text-sm text-center py-4">Create a task to view it!</p>
          }
        </ul>
      </article>
    </main>
  );
}
