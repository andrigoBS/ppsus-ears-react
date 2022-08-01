import React, { useState } from 'react';
import { Alert, Stack } from '@mui/material';
import HtmlHead from '../../components/HtmlHead';

const styles = {
    alertsContainer: {
        position: 'fixed',
        width: 'fit-content',
        right: '20px',
        top: '90px',
    },
};

const ViewContext = React.createContext(null);
export const ViewConfigurationProvider = ({ children, service, baseRoute, loginRoute, title }) => {
    const [alerts, setAlerts] = useState([]);

    const isValidAlertType = (type) => {
        return type && ['error', 'warning', 'info', 'success'].includes(type);
    };

    const pushAlert = (type, message) => {
        if(!message || !isValidAlertType(type)) {
            console.log('Invalid Alert', type, message);
            return;
        }

        setAlerts([...alerts, { type, message }]);
        setTimeout(() => {
            alerts.pop();
            setAlerts([...alerts]);
        }, 5000);
    };

    const genericLog = (response) => {
        if(response.isSuccess) {
            pushAlert('success', `${response.status} - ${response.body.fancyMessage || response.body.message || 'OK'}`);
            console.log(response);
        }else{
            pushAlert('error', `${response.status} - ${response.body.fancyMessage || response.body.message || 'Error'}`);
            console.log(`${response.status} - ${response.body.message || response.body.message}`);
        }
        return response;
    };

    const value = { service: service ? service(genericLog) : undefined, baseRoute, loginRoute: baseRoute+loginRoute, title, pushAlert };

    return (
        <ViewContext.Provider value={value}>
            <HtmlHead view={title}/>
            {children}
            <Stack sx={styles.alertsContainer} spacing={2}>
                {alerts.map(({ type, message }, index) => (<Alert severity={type} key={type+'_'+index}>{message}</Alert>))}
            </Stack>
        </ViewContext.Provider>
    );
};

export const useViewConfiguration = () => {
    return React.useContext(ViewContext);
};
