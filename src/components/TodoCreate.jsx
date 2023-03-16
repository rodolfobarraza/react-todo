const TodoCreate = () => {
    return (
        <form className="flex items-center gap-4 rounded-md overflow-hidden py-3 px-4 bg-white mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input type="text" className="w-full text-gray-400 outline-none" placeholder="Nombre Nueva Tarea" />
        </form>
    )
}

export default TodoCreate;