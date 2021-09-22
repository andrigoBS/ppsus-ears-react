import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { CssBaseline, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

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
        }
    },
});
theme = responsiveFontSizes(theme);

const App = () => {
    return <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
}

ReactDOM.render(<App/>, document.getElementById('root'));
