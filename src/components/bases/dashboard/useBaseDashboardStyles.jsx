import React from 'react';

const useBaseDashboardStyles = () => {
    return {
        container: {
            padding: '10px'
        },
        grid: {
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '1px 1px 1px lightgrey',
            display: 'flex',
            marginBottom: '15px',
            marginRight: '15px',
            padding: '20px'
        },
        title: {
            paddingBottom: '15px'
        }
    };
};

export default useBaseDashboardStyles;
