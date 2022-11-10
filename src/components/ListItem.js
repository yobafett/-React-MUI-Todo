import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {
    ListItem as MUIListItem,
    ListItemAvatar,
    ListItemText,
    IconButton,
    Checkbox,
    TextField
} from '@mui/material';

const ListItem = (props) => {
    const { item, i, filterTodoListByArrId, updateNote, updateDoneStatus } = props;

    const date = new Date(item.date);
    const dateString = `${date.getDay()}/${date.getMonth("en-US")}`;
    const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const [editId, setEditId] = useState(-1);
    const [editFieldContent, setEditFieldContent] = useState('');

    const delElement = () => {
        filterTodoListByArrId(i);
    }

    const editElement = () => {
        setEditFieldContent(item.note)
        setEditId(item.id);
    }

    const closeEdit = () => {
        setEditId(-1);
    }

    const saveEdit = () => {
        updateNote(item.id, editFieldContent);
        closeEdit();
    }

    const checkHandler = (e) => {
        updateDoneStatus(item.id, e.target.checked)
    }

    const liContent = (
        <ListItemText
            sx={{ textDecoration: item.done ? 'line-through' : 'none' }}
            primary={`${item.note}`}
            secondary={`${timeString} / ${dateString}`}
        />
    )

    const liEdit = (
        <TextField id="standard-basic"
            value={editFieldContent}
            onChange={(e) => setEditFieldContent(e.target.value)}
            label={`${timeString} / ${dateString}`}
            variant="standard" />
    );

    const defaultButtonSet = (
        <>
            <IconButton edge="end"
                aria-label="edit"
                onClick={editElement}>
                <EditIcon />
            </IconButton>
            <IconButton edge="end"
                aria-label="delete"
                onClick={delElement}>
                <DeleteIcon />
            </IconButton>
        </>
    );

    const editButtonSet = (
        <>
            <IconButton edge="end"
                aria-label="save"
                onClick={saveEdit}>
                <SaveIcon />
            </IconButton>
            <IconButton edge="end"
                aria-label="cancel"
                onClick={closeEdit}>
                <CancelIcon />
            </IconButton>
        </>
    );

    return (
        <MUIListItem secondaryAction={item.id === editId ? editButtonSet : defaultButtonSet}>
            <ListItemAvatar>
                <Checkbox checked={item.done} onChange={checkHandler} />
            </ListItemAvatar>
            {item.id === editId ? liEdit : liContent}
        </MUIListItem >
    )
}

export default ListItem;