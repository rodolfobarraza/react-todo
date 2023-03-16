import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">

      {/** Header */}
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white font-semibold text-3xl tracking-[0.3em]">Tareas</h1>
          <button><MoonIcon fill="#FFF"/></button>
        </div>
      </header>

      <main className="container mx-auto px-4">

        {/** TodoCreate */}
        <form className="flex items-center gap-4 rounded-md overflow-hidden py-3 px-4 bg-white mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input type="text" className="w-full text-gray-400 outline-none" placeholder="Nombre Nueva Tarea" />
        </form>

        {/** TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <div className="bg-white rounded-t-md mt-8 [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-600">Completar curso JavaScript  en línea</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-600">Completar curso JavaScript  en línea</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-600">Completar curso JavaScript  en línea</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>
        </div>

        {/** TodoCompute */}
        <section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
          <span className="text-gray-400">5 item left</span>
          <button className="text-gray-400">Clear completed</button>
        </section>

        {/** TodoFilter */}
        <section className="container mx-auto mt-8">
          <div className="flex justify-center bg-white py-4 rounded-md gap-4">
            <button className="hover:text-blue-700">All</button>
            <button className="hover:text-blue-700">Active</button>
            <button className="hover:text-blue-700">Completed</button>
          </div>
        </section>
      </main>

      {/**  */}
      <footer className="container text-center mt-8 mx-auto px-4">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App;