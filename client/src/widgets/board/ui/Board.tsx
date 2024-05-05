import './board.scss';
import { useTranslation } from 'react-i18next';
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Column } from '../../column/ui/Column';

export const Board = () => {
    const { t } = useTranslation();

    // Используем useState, но выбираем из изначальных данных или local storage
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('todolist');
        return storedTasks ? JSON.parse(storedTasks) : [
            {
                id: "1",
                title: 'Пример задания 1',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "2",
                title: 'Пример задания 2',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "3",
                title: 'Пример задания 3',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            // Добавляем еще шесть задач для заполнения трех колонок по три задачи в каждой
            {
                id: "4",
                title: 'Пример задания 4',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "5",
                title: 'Пример задания 5',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "6",
                title: 'Пример задания 6',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "7",
                title: 'Пример задания 7',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "8",
                title: 'Пример задания 8',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
            {
                id: "9",
                title: 'Пример задания 9',
                isCompleted: false,
                backgroundVaruable: 'var(--first-notes-color)',
            },
        ];
    });

    const addTask = (title) => {
        setTasks((task) => [...tasks, {
            id: tasks.length + 1, title
        }])
    }

    const getTaskPos = (id) => tasks.findIndex(task => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setTasks((tasks) => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);
            
            const updatedTasks = arrayMove(tasks, originalPos, newPos);

            // Запись обновленного списка в локальное хранилище
            localStorage.setItem("todolist", JSON.stringify(updatedTasks));

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

    // Разделите задачи на три массива по три задачи в каждом
    const columnsTasks = [
        tasks.slice(0, 3),
        tasks.slice(3, 6),
        tasks.slice(6, 9)
    ];

    return (
        <div className='board-content'>
            <div className='capture'>{t('board')}</div>
            <div className="board-list">
                <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    {/* Отображаем три колонки */}
                    {columnsTasks.map((columnTasks, index) => (
                        <Column key={index} tasks={columnTasks} />
                    ))}
                </DndContext>
            </div> 
        </div>
    );
};