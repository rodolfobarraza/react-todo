import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({todo}) => { 

    const {id, title, completed} = todo;

    return (
        <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none">
                <IconCheck/>
            </button>
            <p className="grow text-gray-600">{title}</p>
            <button className=" flex-none"><IconCross/></button>
        </article>
    )
 }

 export default TodoItem;