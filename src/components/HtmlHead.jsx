import React from 'react';
import { useTheme } from '@mui/material';
import { Helmet } from 'react-helmet';

const HtmlHead = ({ subTitle, userType }) => {
    const theme = useTheme();
    let titleFull = import.meta.env.REACT_APP_PROJECT_NAME;
    if(userType){
        titleFull += ' - ' + userType;
    }
    if(subTitle){
        titleFull += ' - ' + subTitle;
    }
    return (
        <Helmet>
            <title>{titleFull}</title>
            <meta name="theme-color" content={theme.palette.primary.main}/>
            <meta name="description" content={'Web site '+import.meta.env.REACT_APP_PROJECT_NAME}/>
            <link rel="canonical" href={import.meta.env.REACT_APP_HOST_NAME} />
        </Helmet>
    );
};

export default HtmlHead;
