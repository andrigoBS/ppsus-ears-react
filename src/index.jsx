import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import HtmlHead from './components/HtmlHead';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './views/Routes';
import { getMuiTheme } from './Theme';

let theme = getMuiTheme();
theme = createTheme(theme);
theme = responsiveFontSizes(theme);

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <HtmlHead/>
                <Routes/>
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
