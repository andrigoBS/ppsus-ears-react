import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const Menu = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Box>
            {data.map((item)=>(
                <Box key={ item.title }>
                    <ListItemButton alignItems="flex-start" >
                        <b color={'#646464'}>{item.title}</b>
                    </ListItemButton>
                    {item.options.map((option) => (
                        <ListItemButton key={option.label} onClick={() => { navigate(option.route); }}>
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
        </Box>
    );
};

export default Menu;