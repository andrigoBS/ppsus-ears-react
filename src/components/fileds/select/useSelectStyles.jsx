import React from 'react';

const useSelectStyles = () => {
    return {
        select: {
            width: '100%',
        },
        multipleChipContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            whiteSpace: 'normal',
            gap: 0.5
        },
        chipElement: {
            maxHeight: '23px'
        },
        OpenedOptionsContainer:  {
            maxHeight: '300px',
        },
    };
};

export default useSelectStyles;
