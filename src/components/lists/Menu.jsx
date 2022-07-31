import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function Menu({ data }) {
    const navigate = useNavigate();

    return (
        <Box>
            <Paper elevation={0} sx={{ width: '100%' }} square>
                {data.map((item)=>(
                    <Box key={ item.title }>
                        <ListItemButton alignItems="flex-start" >
                            <b color={'#646464'}>{item.title}</b>
                        </ListItemButton>
                        {item.options.map((option) => (
                            <ListItemButton key={option.label} onClick={() => { navigate(item.route); }}>
                                <ListItemIcon sx={{ color: 'inherit' }}>
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={option.label}
                                    primaryTypographyProps={{ fontSize: 16, fontWeight: 'medium' }}
                                />
                            </ListItemButton>
                        ))}
                    </Box>
                ))}
            </Paper>
        </Box>
    );
}