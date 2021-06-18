import React, { createContext, useState } from 'react';
import { fetchAuth } from '../api/api';

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState();

    async function handleLogin(email, password) {
        try {
            await fetchAuth(JSON.stringify({
                email: email,
                password: password,
            }), setToken);
            setIsLogged(true);
        } catch {
            throw new Error();
        }
    }

    function handleLogout() {
        setIsLogged(false);
    }

    return (
        <UserContext.Provider value={{
            userIsLogged: isLogged,
            token,
            handleLogin,
            handleLogout
        }}>
            {children}
        </UserContext.Provider>
    )
}