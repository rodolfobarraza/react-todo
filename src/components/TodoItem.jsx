import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({todo}) => { 

    const {id, title, completed} = todo;

    return (
        <article className="flex gap-4 border-b-gray-400 border-b">
            <button className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? "grid place-items-center bg-gradient-to-br from-purple-700 via-purple-300 to-cyan-700" : "inline-block"}`}>
                {completed && <IconCheck stroke="#FFF"/>}
            </button>
            <p className={`grow text-gray-600 ${completed && 'line-through'}`}>{title}</p>
            <button className=" flex-none"><IconCross/></button>
        </article>
    )
 }

 export default TodoItem;