const TodoFilter = () => { 
    return (
        <section className="container mx-auto mt-8">
          <div className="flex justify-center bg-white py-4 rounded-md gap-4">
            <button className="hover:text-blue-700">All</button>
            <button className="hover:text-blue-700">Active</button>
            <button className="hover:text-blue-700">Completed</button>
          </div>
        </section>
    )
 }

 export default TodoFilter;