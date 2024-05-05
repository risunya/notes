import { Task } from '../../../shared/ui/taskItem/TaskItem';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import './column.scss';

export const Column = ({ tasks }) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy={rectSortingStrategy}>
                <div className='column-item'>
                    {tasks.map(task => 
                        <Task id={task.id} title={task.title} key={task.id} isCompleted={task.isCompleted} backgroundVaruable={task.backgroundVaruable}/>
                    )}
                </div>
            </SortableContext>
        </div>
    );
};