import './board.scss';
import { useTranslation } from 'react-i18next';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Column } from '../../column/ui/Column';

export const Board = () => {
    const { t } = useTranslation();

    // Using useState to manage tasks, initializing from local storage or default tasks
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('todolist');
        return storedTasks ? JSON.parse(storedTasks) : [
            {
                id: 1,
                title: 'Пример задания 1',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 2,
                title: 'Пример задания 2',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 3,
                title: 'Пример задания 3',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 4,
                title: 'Пример задания 4',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 5,
                title: 'Пример задания 5',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 6,
                title: 'Пример задания 6',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 7,
                title: 'Пример задания 7',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 8,
                title: 'Пример задания 8',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: 9,
                title: 'Пример задания 9',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
        ];
    });

    type Task = {
        id: number;
        title: string;
        isCompleted: boolean;
        backgroundVaruable: string;
    };

    const addTask = (title: string) => {
        setTasks((tasks: Task[]) => [
            ...tasks,
            {
                id: tasks.length + 1,
                title,
                isCompleted: false,
                backgroundVaruable: '' // Assuming default value
            }
        ]);
    };

    const getTaskPos = (id: number): number => {
        return tasks.findIndex((task: Task) => task.id === id);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        setTasks((tasks: Task[]) => {
            const originalPos = getTaskPos(Number(active.id));
            const newPos = getTaskPos(Number(over.id));

            const updatedTasks = arrayMove(tasks, originalPos, newPos);

            // Save the updated list to local storage
            localStorage.setItem('todolist', JSON.stringify(updatedTasks));

            return updatedTasks;
        });
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleAddTask = (title: string) => {
        addTask(title);
        // Optionally clear input field or handle other logic after adding task
    };

    return (
        <div className='board-content'>
            <div className='capture'>{t('board')}</div>
            <div className="board-list">
                <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    {/* Displaying columns */}
                    <Column tasks={tasks} />
                </DndContext>
            </div>
            <div className="add-task-form">
                <input type="text" placeholder="Enter task title" />
                <button onClick={() => handleAddTask('New Task')}>Add Task</button>
            </div>
        </div>
    );
};
