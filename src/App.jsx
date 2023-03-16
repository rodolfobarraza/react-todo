import Header from "./components/Header";
import TodoCompute from "./components/TodoCompute";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">

      <Header/>

      <main className="container mx-auto px-4">

        <TodoCreate/>

        {/** TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <TodoList/>

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