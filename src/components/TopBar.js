import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { TaskAlt } from '@mui/icons-material';

const TopBar = () => {
    return (
        <AppBar position="static" sx={{mb: 2}}>
            <Toolbar>
                <IconButton color="inherit" sx={{ mr: 2 }}>
                    <TaskAlt />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Todo List
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;