const TodoCompute = ({computedItemsLeft, clearCompleted}) => { 
    return (
        <section className="dark:bg-gray-800 transition-all duration-1000 flex justify-between py-4 px-4 bg-white rounded-b-md">
          <span className="text-gray-400">{computedItemsLeft} items left</span>
          <button onClick={clearCompleted} className="text-gray-400">Clear completed</button>
        </section>
    )
 }

 export default TodoCompute;