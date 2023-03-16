import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">

      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white font-semibold text-3xl tracking-[0.3em]">Tareas</h1>
          <button>luna</button>
        </div>
        <form className="flex items-center gap-4 rounded-md overflow-hidden py-3 px-4 bg-white mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input type="text" className="w-full text-gray-400 outline-none" placeholder="Nombre Nueva Tarea" />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md inline-block w-full px-4">
          <article>
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">Completar curso JavaScript  en línea</p>
            <button><CrossIcon/></button>
          </article>
          <article>
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">Completar curso JavaScript  en línea</p>
            <button><CrossIcon/></button>
          </article>
          <article>
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">Completar curso JavaScript  en línea</p>
            <button><CrossIcon/></button>
          </article>
          <section>
            <span>5 item left</span>
            <button>Clear completed</button>
          </section>
        </div>
      </main>

      <section>
        <button className="container mx-auto px-4">All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <section>Drag and drop to reorder list</section>

      <footer className="container mx-auto px-4"></footer>
    </div>
  )
}

export default App;