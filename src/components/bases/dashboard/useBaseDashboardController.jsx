import React from 'react';

const isSmall = (length) => length <= 10;
const isMedium = (length) => length <= 30;

const getSizes = (length) => {
    if(isSmall(length)) {
        return { xs:12, sm:8, md:4, lg:4, xl:2 };
    }
    if(isMedium(length)) {
        return { xs:12, lg:6 };
    }
    return { xs:12, xl: 6 };
};

const useBaseDashboardController = () => {
    const onClickElement = (elementIndex, type) => {
        console.log('report type', type, 'clicked element index', elementIndex);
    };

    return { isSmall, isMedium, getSizes, onClickElement };
};

export default useBaseDashboardController;
