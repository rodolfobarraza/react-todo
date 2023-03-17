import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo}) => { 
    return (
        <div className="bg-white transition-all duration-1000 rounded-t-md dark:bg-gray-800 overflow-hidden mt-8 [&>article]:p-4">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              updateTodo={updateTodo} 
              removeTodo={removeTodo}
            />
          ))}
        </div>
    );
 };

 export default TodoList;