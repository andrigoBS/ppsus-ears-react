import HtmlHead from '../../components/HtmlHead';
import React, { useState } from 'react';

const ViewContext = React.createContext(null);
export const ViewConfigurationProvider = ({ children, service, baseRoute, loginRoute, title }) => {
    const [linkMenu, setLinkMenu] = useState(null);

    const value = { service, baseRoute, loginRoute: baseRoute+loginRoute, title, linkMenu, setLinkMenu };

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
