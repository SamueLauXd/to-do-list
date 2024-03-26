export function Form({handleSubmit}){
    return (
        <form id="formulario" onSubmit={handleSubmit} className="py-2 flex justify-between items-center gap-4 text-sm">
            <input required name="task" className="px-2 py-1 bg-[rgb(242,242,247)] dark:bg-[rgb(28,28,30)] rounded-md w-full transition-color ease-in duration-300 outline-none border border-transparent hover:border-[rgb(199,199,204)] focus:border-[rgb(199,199,204)] focus:placeholder:px-1" type="text" placeholder="Walk the dog..." />
            <button className="px-2 py-1 bg-[rgb(242,242,247)] dark:bg-[rgb(28,28,30)] font-medium rounded-md hover:bg-[rgb(199,199,204)] transition-color ease-in duration-300">Create</button>
        </form>
    )
}