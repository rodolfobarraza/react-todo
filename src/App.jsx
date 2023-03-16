const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">

      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white font-semibold text-3xl tracking-[0.3em]">Tareas</h1>
          <button>luna</button>
        </div>
        <form>
          <input type="text" placeholder="Nombre Nueva Tarea" />
        </form>
      </header>

      <main className="container mx-auto px-4">
        <article>
          <button>circulo</button>
          <p>Completar curso JavaScript  en línea</p>
          <button>times</button>
        </article>
        <article>
          <button>circulo</button>
          <p>Completar curso JavaScript  en línea</p>
          <button>times</button>
        </article>
        <article>
          <button>circulo</button>
          <p>Completar curso JavaScript  en línea</p>
          <button>times</button>
        </article>
        <section>
          <span>5 item left</span>
          <button>Clear completed</button>
        </section>
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