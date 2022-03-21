import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Routes from './views/Routes';
import HtmlHead from "./components/HtmlHead";

let theme = createTheme({
    palette: {
        primary: {
            main: '#5D307A'
        },
        secondary: {
            main: "#E83268"
        },
        tertiary: {
            main: "#fbbc43"
        },
        secondaryBlue: {
            main: "#99ffe4"
        },
        background: {
            default: "#fafafa"
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#646464',
                },
                h1: {
                    fontWeight: 'bold',
                },
                h2: {
                    fontWeight: 'bold',
                },
                h3: {
                    fontWeight: 'bold',
                },
                h4: {
                    fontWeight: 'bold',
                },
                h5: {
                    fontWeight: 'bold',
                },
                h6: {
                    fontWeight: 'bold',
                },
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%'
                },
            },
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
