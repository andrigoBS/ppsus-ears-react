import React from "react";
import { Helmet } from 'react-helmet';
import {useTheme} from "@mui/material";

function HtmlHead({view, subTitle}) {
    const theme = useTheme();
    let titleFull = process.env._REACT_APP_PROJECT_NAME;
    if(view){
        titleFull += " - " + view;
    }
    if(subTitle){
        titleFull += " - " + subTitle;
    }
    return (
        <Helmet>
            <title>{titleFull}</title>
            <link rel="canonical" href={process.env._REACT_APP_HOST_NAME} />
            <meta name="theme-color" content={theme.palette.primary.main}/>
            <meta name="description" content={"Web site "+process.env._REACT_APP_PROJECT_NAME}/>
        </Helmet>
    );
}

export default HtmlHead;
