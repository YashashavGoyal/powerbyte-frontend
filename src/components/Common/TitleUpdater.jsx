import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLE_MAP = {
    '/': 'PowerByte - Home',
    '/login': 'PowerByte - Login',
    '/signup': 'PowerByte - Sign Up',
    '/panel/dashboard': 'PowerByte - Dashboard',
    '/panel/usage': 'PowerByte - Energy Usage',
    '/panel/savingmethods': 'PowerByte - Saving Methods',
    '/panel/powerconsumption': 'PowerByte - Power Consumption',
    '/panel/energycalculator': 'PowerByte - Energy Calculator',
    '/panel/integrations': 'PowerByte - Integrations',
};

const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        // Check for exact match first
        let title = TITLE_MAP[location.pathname];

        // If no exact match, try to match deeper routes (e.g., /panel/dashboard/zone_A)
        if (!title) {
            if (location.pathname.startsWith('/panel/dashboard')) {
                title = 'PowerByte - Dashboard';
            } else if (location.pathname.startsWith('/panel/usage')) {
                title = 'PowerByte - Energy Usage';
            } else if (location.pathname.startsWith('/panel/powerconsumption')) {
                title = 'PowerByte - Power Consumption';
            } else {
                title = 'PowerByte - Smart Energy Management';
            }
        }

        document.title = title;
    }, [location]);

    return null;
};

export default TitleUpdater;
