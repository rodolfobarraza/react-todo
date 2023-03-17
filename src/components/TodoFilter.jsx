const TodoFilter = ({changeFilter, filter}) => { 
    return (
        <section className="container mx-auto mt-8">
          <div className="dark:bg-gray-800 flex justify-center bg-white py-4 rounded-md gap-4">
            <button 
              onClick={() => changeFilter('all')} 
              className={`${filter === 'all' 
                ? 'text-blue-500 font-bold' 
                : 'text-gray-500 hover:text-blue-500'}`
              }
            >
                All
            </button>
            <button 
              onClick={() => changeFilter('active')} 
              className={`${filter === 'active' 
                ? 'text-blue-500 font-bold' 
                : 'text-gray-500 hover:text-blue-500'}`
              }
            >
                Active
            </button>
            <button 
              onClick={() => changeFilter('completed')} 
              className={`${filter === 'completed' 
                ? 'text-blue-500 font-bold' 
                : 'text-gray-500 hover:text-blue-500'}`
              }
            >
                Completed
            </button>
          </div>
        </section>
    )
 }

 export default TodoFilter;