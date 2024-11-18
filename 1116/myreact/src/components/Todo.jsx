//解構props的屬性名稱，用{屬姓名}包起來
function Todo({todo}) {
    return (
        <div className="todo">
            {/* <p>繳停車費</p> */}
            {/* <p>{todo}</p> */}
            <p>{todo.content}</p>
        </div>
    )
}
export default Todo