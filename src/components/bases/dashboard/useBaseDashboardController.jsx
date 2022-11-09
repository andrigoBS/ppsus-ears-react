import React from 'react';

const isSmall = (length) => length <= 10;
const isMedium = (length) => length <= 30;

const getSizes = (length) => {
    if(isSmall(length)) {
        return { lg:4, md:4, sm:8, xl:2, xs:12 };
    }
    if(isMedium(length)) {
        return { lg:6, xs:12 };
    }
    return { xl: 6, xs:12 };
};

const useBaseDashboardController = () => {
    const onClickElement = (elementIndex, type) => {
        console.log('report type', type, 'clicked element index', elementIndex);
    };

    return { getSizes, isMedium, isSmall, onClickElement };
};

export default useBaseDashboardController;
