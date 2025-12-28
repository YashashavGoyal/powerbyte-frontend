import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isUserLoggedin } from '../../utils/helper';

const ProtectedRoute = () => {
    if (!isUserLoggedin()) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
