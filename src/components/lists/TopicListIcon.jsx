import {Box} from "@mui/material";
import React from "react";

const createStyle = (theme) => {
    return {
        container: {
            margin: '15px 0 0 20px',
        },
        itemContainer: {
            display: 'flex',
            margin: '5px 0 5px 0',
        },
        icon: {
            margin: '2px 10px 0 0',
            '& svg':{
                fontSize: '1rem',
            },
        }
    };
};

const TopicListIcon = ({topics, icon}) => {
    const style = createStyle();

    return (
        <Box sx={style.container}>
            {topics.map((topic) => (
                <Box sx={style.itemContainer}>
                    <Box sx={style.icon}>{icon}</Box>
                    {topic}
                </Box>
            ))}
        </Box>
    );
};

export default TopicListIcon;