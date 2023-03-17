import { useState } from "react";

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('');

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return setTitle('');
    }
    
    createTodo(title);
    setTitle('');
  }

  return (
    <form 
      onSubmit={handleSubmitAddTodo} 
      className="dark:bg-gray-800 flex items-center gap-4 rounded-md overflow-hidden py-3 px-4 bg-white mt-8"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input 
        type="text"
        className="dark:bg-gray-800 w-full text-gray-400 outline-none" 
        placeholder="Nombre Nueva Tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default TodoCreate;