import { useState } from 'react';
import { Box, FormControl, TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

const ItemInput = (props) => {
    const [inputValue, setInputValue] = useState('');

    const submitHandler = (e) => {
        props.addNote(inputValue);
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const styles = {
        position: 'fixed',
        bottom: 0,
        maxWidth: '500px',
        padding: '20px',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    return (
        <FormControl fullWidth variant="standard" sx={styles}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField
                    label="Note text"
                    variant="outlined"
                    sx={{ width: 1, mb: 1 }}
                    value={inputValue}
                    onChange={handleChange} >
                </TextField>

            </Box>
            <Button variant="contained" endIcon={<Send />} onClick={submitHandler}>
                Add
            </Button>
        </FormControl>
    );
}

export default ItemInput;