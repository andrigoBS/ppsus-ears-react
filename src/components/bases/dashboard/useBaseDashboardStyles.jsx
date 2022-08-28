import React from 'react';

const useBaseDashboardStyles = () => {
    return {
        container: {
            padding: '15px 50px'
        },
        title: {
            paddingBottom: '15px'
        },
        grid: {
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#ffffff',
            marginRight: '15px',
            marginBottom: '15px',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '1px 1px 1px lightgrey'
        }
    };
};

export default useBaseDashboardStyles;
