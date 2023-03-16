import TodoItem from "./TodoItem";

const TodoList = () => { 
    return (
        <div className="bg-white rounded-t-md mt-8 [&>article]:p-4">
          <TodoItem/>
        </div>
    );
 };

 export default TodoList;