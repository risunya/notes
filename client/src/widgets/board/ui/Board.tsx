import './board.scss'
import { useTranslation } from 'react-i18next';
import { DndContext, closestCorners } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { Column } from '../../column/ui/Column';



export const Board = () => {
    const {t} = useTranslation();
    const [tasks, setTasks] = useState([
        {
            id: "1",
            title: 'Задание 1',
            isCompleted: false,
        },
        {
            id: "2",
            title: 'Задание 2',
            isCompleted: false,
        },
        {
            id: "3",
            title: 'Задание 3',
            isCompleted: true,
        },
        {
            id: "4",
            title: 'Задание 2',
            isCompleted: false,
        },
        {
            id: "5",
            title: 'Задание 3',
            isCompleted: true,
        },
        {
            id: "6",
            title: 'Задание 2',
            isCompleted: false,
        },
        {
            id: "7",
            title: 'Задание 3',
            isCompleted: true,
        },
        {
            id: "8",
            title: 'Задание 2',
            isCompleted: false,
        },
        {
            id: "9",
            title: 'Задание 3',
            isCompleted: true,
        },
    ])


    const getTaskPos = id => tasks.findIndex(task => task.id === id)
    const handleDragEnd = (event) => {
        const {active, over} = event;
 
        if(active.id === over.id) return;

        setTasks(tasks => {
            const originalPos = getTaskPos(active.id)
            const newPos = getTaskPos(over.id)

            return arrayMove(tasks, originalPos, newPos)
        })
    }


    return (
            <div className='board-content'>
                <div className='capture'>{t('board')}</div>

                
                 <div className="board-list">
                 <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <Column tasks={tasks}/>
                 </DndContext>                  
                </div> 
            </div>
    )
}

