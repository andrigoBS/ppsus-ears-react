import React from 'react';

const usePartnersStyles = ({ color }) => {

    return {
        box: {
            backgroundColor: color,
            padding: '45px',
            textAlign: 'center'
        },
        margin: {
            marginBottom: '30px'
        }
    };
};

export default usePartnersStyles;