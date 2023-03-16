import CrossIcon from "../components/icons/CrossIcon";

const TodoItem = () => { 
    return (
        <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-600">Completar curso JavaScript  en línea</p>
            <button className=" flex-none"><CrossIcon/></button>
        </article>
    )
 }

 export default TodoItem;