export const getGraphicColors = (alpha) => {
    let colors = [
        'rgba(232, 50, 104)',
        'rgba(45, 183, 188)',
        'rgba(251, 188, 67)',
        'rgba(93, 48, 122)',
        'rgba(45, 200, 88)',
        'rgba(236, 113, 217)',
        'rgba(243, 131, 33)',
        'rgba(0, 134, 248)',
    ];
    colors = colors.map((color) => {
        return color.replace(')', `, ${alpha})`);
    });
    return colors;
};

export const getMuiTheme = () => ({
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
            main: "#2db7bc"
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
                subtitle1: {
                    fontWeight: 'bold',
                },
                subtitle2: {
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
