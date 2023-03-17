import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoCompute from "./components/TodoCompute";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//   { id: 1, title: "Mi tarea uno", completed: false },
//   { id: 2, title: "Otra cosa por hacer", completed: false },
//   { id: 3, title: "Ya está hecho", completed: true },
//   { id: 4, title: "Otro realizado", completed: true },
// ]

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900">

      <Header/>

      <main className="container mx-auto px-4">

        <TodoCreate 
          createTodo={createTodo}
        />

        {/** TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <TodoList 
          todos={filteredTodos()} 
          updateTodo={updateTodo} 
          removeTodo={removeTodo}
        />

        <TodoCompute computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>

        <TodoFilter 
          changeFilter={changeFilter} 
          filter={filter}
        />

      </main>

      <footer className="container transition-all duration-1000 text-center mt-8 mx-auto px-4 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  )
}

export default App;