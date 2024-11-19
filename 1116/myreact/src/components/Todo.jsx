import { MdDelete, MdModeEdit } from "react-icons/md";

//解構props的屬性名稱，用{屬姓名}包起來
function Todo({ todo, deleteTodo }) {
    return (
        <div className="todo">
            {/* <p>繳停車費</p> */}
            {/* <p>{todo}</p> */}
            <p>{todo.content}</p>
            <div>
                <MdModeEdit style={{ cursor: 'pointer' }} />
                <MdDelete
                    onClick={() => { deleteTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginLeft: '5px' }} />
            </div>


        </div>
    )
}
export default Todo