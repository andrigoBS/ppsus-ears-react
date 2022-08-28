import { Helmet } from 'react-helmet';
import React from 'react';
import { useTheme } from '@mui/material';

const HtmlHead = ({ view, subTitle }) => {
    const theme = useTheme();
    let titleFull = import.meta.env.REACT_APP_PROJECT_NAME;
    if(view){
        titleFull += ' - ' + view;
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
