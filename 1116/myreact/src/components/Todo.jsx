import { MdDelete, MdModeEdit } from "react-icons/md";

//解構props的屬性名稱，用{屬姓名}包起來
function Todo({ todo, deleteTodo, toggleCompleted }) {
    return (
        //新增一個completed類別規則
        //使用反引號+三元運算子檢查isCompleted
        //如果為真=>套用Completed類別規則
        //如果為否=>取消Completed類別規則 =>''
        //todo.iscompleted ? 'completed' : ' '
        // todo.iscompleted ===true 'completed' ===false ' '
        <div className={`todo ${todo.isCompleted ? 'completed': ''}`}>
            {/* <p>繳停車費</p> */}
            {/* <p>{todo}</p> */}
            <p onClick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
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