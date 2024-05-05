import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './taskitem.scss';
import { SecondIcon } from './icons/SecondIcon';
import { ThirdIcon } from './icons/ThirdIcon';

export const Task = ({ id, title, isCompleted, backgroundVaruable }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        backgroundColor: backgroundVaruable,
    };

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>
            <div className='task-header'>
                {/* Удалите или измените иконку в зависимости от вашего предпочтения */}
                <div className='task-header__pin-status'>
                    {isCompleted ? <SecondIcon /> : <ThirdIcon />}
                </div>
            </div>
            <div>{title}</div>
        </div>
    );
};