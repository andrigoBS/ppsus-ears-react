import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Routes from './Routes';
import HtmlHead from "./components/HtmlHead";

let theme = createTheme({
    palette: {
        primary: {
            main: '#3862e0'
        },
        secondary: {
            main: "#2DAD8D"
        },
        tertiary: {
            main: "#99ffe4"
        },
        background: {
            default: "#fafafa"
        },
    },
});
theme = responsiveFontSizes(theme);

const App = () => {
    return <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HtmlHead/>
            <Routes/>
        </ThemeProvider>
    </React.StrictMode>
}

ReactDOM.render(<App/>, document.getElementById('root'));
