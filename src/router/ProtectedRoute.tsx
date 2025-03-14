import { useAuth } from '@/shared/context/AuthContext';
import React from 'react';
import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated} = useAuth(); 

    if (!isAuthenticated) {

        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};