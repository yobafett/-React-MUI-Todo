import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TopBar from './TopBar';
import ListItem from './ListItem';
import ItemInput from './ItemInput';
import { Container } from '@mui/material';

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addNote = (content) => {
        setTodoList([...todoList, {
            id: uuidv4(),
            date: Date.now(),
            note: content
        }]);
    }

    const filterTodoListByArrId = (arrId) => {
        setTodoList(todoList.filter((item, i) => i !== arrId));
    }

    const updateNote = (id, content) => {
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                item.note = content;
            }

            return item;
        }))
    }

    const listItems = todoList.map((item, i) => {
        return <ListItem key={item.id} item={item} i={i}
            filterTodoListByArrId={filterTodoListByArrId}
            updateNote={updateNote} />
    })

    return (
        <>
            <TopBar />
            <Container>
                <ul className="notes-list">{listItems}</ul>
                <ItemInput addNote={addNote} />
            </Container>
        </>
    );
}

export default TodoList;
