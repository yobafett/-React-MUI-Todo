import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, List } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TopBar from './TopBar';
import ListItem from './ListItem';
import ItemInput from './ItemInput';
import './TodoList.scss';

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
        return (
            <CSSTransition
                key={item.id}
                timeout={1000}
                classNames="list-item">
                <ListItem item={item} i={i}
                    filterTodoListByArrId={filterTodoListByArrId}
                    updateNote={updateNote} />
            </CSSTransition>
        )
    })

    return (
        <>
            <TopBar />
            <Container>
                <TransitionGroup component={List}>
                    {listItems}
                </TransitionGroup>

                <ItemInput addNote={addNote} />
            </Container>
        </>
    );
}

export default TodoList;
