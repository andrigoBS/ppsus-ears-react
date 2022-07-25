import React from 'react';
import HtmlHead from '../../components/HtmlHead';

const ViewContext = React.createContext(null);
export const ViewConfigurationProvider = ({ children, service, baseRoute, loginRoute, title }) => {

    const value = { service, baseRoute, loginRoute: baseRoute+loginRoute, title };

    return (
        <ViewContext.Provider value={value}>
            <HtmlHead view={title}/>
            {children}
        </ViewContext.Provider>
    );
};

export const useViewConfiguration = () => {
    return React.useContext(ViewContext);
};