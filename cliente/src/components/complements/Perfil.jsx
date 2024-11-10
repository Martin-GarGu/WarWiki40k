import { useState, useEffect } from "react";

export default function Perfil() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    if (!user) {
        return <p>Cargando...</p>;
    }
    return (
        <>
            <h3>Username:</h3>
            <p>{user.username}</p>
            <h3>Email:</h3>
            <p>{user.email}</p> 
        </>
    );
}
