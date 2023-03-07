import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import HtmlHead from './components/HtmlHead';
import { LoggerProvider } from './providers/genericLogger/GenericLogger';
import { getMuiTheme } from './Theme';
import Routes from './users/Routes';

let theme = getMuiTheme();
theme = createTheme(theme);
theme = responsiveFontSizes(theme);

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <LoggerProvider>
                    <CssBaseline/>
                    <HtmlHead/>
                    <Routes/>
                </LoggerProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
