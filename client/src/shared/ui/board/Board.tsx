import { Todoitem } from '../toDoItem/Todoitem'
import './board.scss'

const todos = [
    {
        _id: "dsacxz",
        title: 'Приоритет 1',
        isCompleted: false,
    },
    {
        _id: "dsadsacxz",
        title: 'Приоритет 2',
        isCompleted: false,
    },
    {
        _id: "dsdsaacxz",
        title: 'Приоритет 3',
        isCompleted: true,
    },
]

export const Board = () => {
    return (
            <div className="board-list">
                {todos.map(todo => (
                <Todoitem key={todo._id} todo={todo}/>
                ))}
            </div>
    )
}