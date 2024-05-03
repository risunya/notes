import "./todoitem.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Todoitem = ({todo} : {todo : any}) => {
    return (
        <div className="board-item">
            <div className="title">{todo.title}</div>
            <div className="main-text">dasdasda</div>
            <div className="date">22.02.22</div>
        </div>
    )
}