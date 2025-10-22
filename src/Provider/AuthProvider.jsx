import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = () => {};

    const authData = {
        user,
        setUser
    }
    return (

        < AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;