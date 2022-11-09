import * as React from 'react';
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
