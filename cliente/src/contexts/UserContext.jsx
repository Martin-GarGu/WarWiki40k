// UserContext.js - Crea este archivo en src/contexts/UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Función para parsear datos del localStorage de forma segura
    const safeParseUser = (userData) => {
        try {
            return JSON.parse(userData);
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return null;
        }
    };

    // Función para guardar usuario en localStorage de forma segura
    const safeSaveUser = (userData) => {
        try {
            localStorage.setItem("user", JSON.stringify(userData));
            return true;
        } catch (error) {
            console.error("Error saving user data to localStorage:", error);
            return false;
        }
    };

    // Función para cargar usuario del localStorage
    const loadUserFromStorage = () => {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");
        
        if (token && userData) {
            const parsedUser = safeParseUser(userData);
            if (parsedUser) {
                setUser(parsedUser);
                setIsLogged(true);
            } else {
                setUser(null);
                setIsLogged(false);
            }
        } else {
            setUser(null);
            setIsLogged(false);
        }
        setIsLoading(false);
    };

    // Función para actualizar usuario (mantiene sincronización con localStorage)
    const updateUser = (newUserData) => {
        const saved = safeSaveUser(newUserData);
        if (saved) {
            setUser(newUserData);
        }
        return saved;
    };

    // Función para login
    const login = (userData, token) => {
        localStorage.setItem("token", token);
        const saved = safeSaveUser(userData);
        if (saved) {
            setUser(userData);
            setIsLogged(true);
        }
        return saved;
    };

    // Función para logout
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsLogged(false);
    };

    // Cargar usuario al montar el contexto
    useEffect(() => {
        loadUserFromStorage();
    }, []);

    // Función para obtener el rol del usuario
    const getUserRole = () => {
        return user?.role || "";
    };

    // Función para verificar si es admin
    const isAdmin = () => {
        return user?.role === "admin";
    };

    const value = {
        user,
        isLogged,
        isLoading,
        updateUser,
        login,
        logout,
        loadUserFromStorage,
        getUserRole,
        isAdmin
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};