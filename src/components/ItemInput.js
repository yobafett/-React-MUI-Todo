import { useState } from 'react';
import { Box, FormControl, InputLabel, Input, IconButton } from '@mui/material';
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
                <InputLabel htmlFor="new-note">Note text</InputLabel>
                <Input id="new-note"
                    sx={{ width: 1 }}
                    value={inputValue}
                    onChange={handleChange}
                />
                <IconButton onClick={submitHandler}>
                    <Send color="primary" />
                </IconButton>
            </Box>
        </FormControl>
    );
}

export default ItemInput;