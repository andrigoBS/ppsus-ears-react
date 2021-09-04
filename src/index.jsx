import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#38E0B6'
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
