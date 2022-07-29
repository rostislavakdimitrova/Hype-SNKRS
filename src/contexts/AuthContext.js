import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider =  ( {children} ) => {
    const [ user, setUser ] = useLocalStorage('auth', {});

    const userAuth = (authData) => {
        setUser(authData);
    }

    const userLogout = () => {
        setUser({});
    }

    return (
        <div>
            <AuthContext.Provider value={{user, userAuth, userLogout}}>{children}</AuthContext.Provider>
        </div>
    );
};