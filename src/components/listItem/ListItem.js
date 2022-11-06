import { useState, useRef } from 'react';

import editIcon from '../../assets/icons/edit.svg';
import delIcon from '../../assets/icons/del.svg';
import cancelIcon from '../../assets/icons/cancel.svg';
import confirmIcon from '../../assets/icons/confirm.svg';
import './ListItem.scss';

const ListItem = (props) => {
    const { item, i, filterTodoListByArrId, updateNote } = props;
    const date = new Date(item.date);
    const dateString = `${date.getDay()}/${date.getMonth("en-US")}`;
    const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const [editId, setEditId] = useState(0);
    const inputEdit = useRef();

    const delElement = (e, arrId) => {
        e.preventDefault();
        filterTodoListByArrId(arrId);
    }

    const editElement = (e, id = 0) => {
        e.preventDefault();
        setEditId(id);
    }

    const saveEdit = (e, id) => {
        e.preventDefault();

        updateNote(id, inputEdit.current.value);

        editElement(e);
    }

    const liContent = (
        <>
            <div className="content">
                <span onClick={(e) => editElement(e, item.id)}>
                    {`${i + 1}. ${item.note}`}
                </span>
                <div className='date-time'>
                    <span>{dateString}</span>
                    <span>{timeString}</span>
                </div>
            </div>
            <button onClick={(e) => delElement(e, i)}>
                <img src={delIcon} alt="Delete" />
            </button>
        </>
    )

    const liEdit = (
        <>
            <input ref={inputEdit} type="text" defaultValue={item.note} />
            <div>
                <button onClick={(e) => saveEdit(e, item.id)}>
                    <img src={confirmIcon} alt="Confirm" />
                </button>
                <button onClick={(e) => editElement(e)}>
                    <img src={cancelIcon} alt="Cancel" />
                </button>
            </div>
        </>
    );

    return (
        <li className='list-item'>
            {item.id === editId ? liEdit : liContent}
        </li>
    );
}

export default ListItem;