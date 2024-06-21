import React from 'react';
import { Task as TaskComponent } from '../../../shared/ui/taskItem/TaskItem';
import { SortableContext, rectSwappingStrategy } from '@dnd-kit/sortable';
import './column.scss';

// Define the TaskType interface
interface TaskType {
    id: string; // Change to string
    title: string;
    isCompleted: boolean;
    backgroundVaruable: string;
}

// Define the props for the Column component
interface ColumnProps {
    tasks: TaskType[];
}

export const Column: React.FC<ColumnProps> = ({ tasks }) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy={rectSwappingStrategy}>
                <div className='column-item'>
                    {tasks.map((task: TaskType) => (
                        <TaskComponent 
                            id={task.id} 
                            title={task.title} 
                            key={task.id} 
                            isCompleted={task.isCompleted} 
                            backgroundVaruable={task.backgroundVaruable} 
                        />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
};
