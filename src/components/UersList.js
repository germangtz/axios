import React, {useState, useEffect} from "react";
import api from "../services/api";
import '../styles/styles.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useEffect(null);

    useEffect(() => {
        // FUNCION PARA OBTENER USUARIOS
        const fetchUsers = async () => {
            try {
                const response=await api.get('/Users');
                setUsers(response data);
            } catch(err) {
                setError('Error al obtener los datos');
            } finally{
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if(loading) return <p>Cargando...</p>
    if (error) return <p className="error-message">{error}</p>

    return(
        <div className="user-list">
    <h2>Lista de Usuarios</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p><strong>Nombre:</strong>{user.name}</p>
                        <p><strong>Email:</strong>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
