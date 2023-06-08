import { IList } from "@/interface/list";
import { useGlobalContext } from "@/lib/context/GlobalContext";
import { AiFillDelete } from "react-icons/ai";

export function NoteList() {
    const { props: { list, deleteList } } = useGlobalContext();    

    return (
        <ul>
            {list?.map((list: IList, ind: number) =>
                <div className="noteList" key={ind}>
                    <li>{list.title}</li>
                    {list.delete && <AiFillDelete onClick={()=>deleteList(ind)} />}
                </div>
            )}
        </ul>
    )
}