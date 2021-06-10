import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    function handleLogin() {
        setIsLogged(true);
    }

    function handleLogout() {
        setIsLogged(false);
    }

    return (
        <UserContext.Provider value={{
            userIsLogged: isLogged,
            handleLogin,
            handleLogout
        }}>
            {children}
        </UserContext.Provider>
    )
}