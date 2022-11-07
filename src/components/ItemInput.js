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

    return (
        <FormControl fullWidth variant="standard">
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