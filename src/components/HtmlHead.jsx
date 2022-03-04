import React from "react";
import { Helmet } from 'react-helmet';
import {useTheme} from "@mui/material";

function HtmlHead({view, subTitle}) {
    const theme = useTheme();
    let titleFull = process.env.REACT_APP_PROJECT_NAME;
    if(view){
        titleFull += " - " + view;
    }
    if(subTitle){
        titleFull += " - " + subTitle;
    }
    return (
        <Helmet>
            <title>{titleFull}</title>
            <meta name="theme-color" content={theme.palette.primary.main}/>
            <meta name="description" content={"Web site "+process.env.REACT_APP_PROJECT_NAME}/>
            <link rel="canonical" href={process.env.REACT_APP_HOST_NAME} />
            <link rel="icon" href={process.env.REACT_APP_HOST_NAME+"/favicon.ico"} />
            <link rel="apple-touch-icon" href={process.env.REACT_APP_HOST_NAME+"/logo192.png"} />
            <link rel="manifest" href={process.env.REACT_APP_HOST_NAME+"/manifest.json"} />
        </Helmet>
    );
}

export default HtmlHead;
