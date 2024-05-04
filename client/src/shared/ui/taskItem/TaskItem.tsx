import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './taskitem.scss';
export const Task = ({id, title}) => {

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return (
       <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>
            <div>{title}</div>
            <div>{id}</div>
       </div>
    )
}  