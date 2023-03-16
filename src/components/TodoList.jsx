import CrossIcon from "./icons/CrossIcon";

const TodoList = () => { 
    return (
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
    );
 };

 export default TodoList;