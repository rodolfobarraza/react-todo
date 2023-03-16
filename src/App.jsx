const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-center">

        <header className="container mx-auto px-4">
          <h1 className="uppercase">Tareas</h1>
          <button>luna</button>
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

        <section></section>

        <footer className="container mx-auto px-4"></footer>
      </div>
    </>
  )
}

export default App;