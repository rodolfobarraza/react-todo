import { useState } from "react";
import Header from "./components/Header";
import TodoCompute from "./components/TodoCompute";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Mi tarea uno", completed: false },
  { id: 2, title: "Otra cosa por hacer", completed: false },
  { id: 3, title: "Ya está hecho", completed: true },
  { id: 4, title: "Otro realizado", completed: true },
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setTodos([...todos, newTodo]);
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">

      <Header/>

      <main className="container mx-auto px-4">

        <TodoCreate createTodo={createTodo}/>

        {/** TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <TodoList todos={todos}/>

        <TodoCompute/>

        <TodoFilter/>

      </main>

      <footer className="container text-center mt-8 mx-auto px-4">
        Drag and drop to reorder list
      </footer>
    </div>
  )
}

export default App;