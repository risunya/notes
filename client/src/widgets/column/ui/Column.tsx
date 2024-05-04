import { Task } from '../../../shared/ui/taskItem/TaskItem';
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import './column.scss'


export const Column = ({tasks}) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map(task => 
                    <Task id={task.id} title={task.title} key={task.id}/>
                )}
            </SortableContext>
        </div>
    )
}   