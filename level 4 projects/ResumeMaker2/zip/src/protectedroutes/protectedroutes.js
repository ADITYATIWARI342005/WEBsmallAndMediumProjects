import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const userInLocalStorage = JSON.parse(localStorage.getItem('yourpholio'))?.uid;
    console.log(userInLocalStorage);

    if (!userInLocalStorage) {
        return <Navigate to="/signin" />;
    }

    return children;
};

export default ProtectedRoutes;
