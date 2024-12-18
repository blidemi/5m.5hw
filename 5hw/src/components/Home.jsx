import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
    const users = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    if (error) {
        return <h1>Ошибка: {error}</h1>;
    }

    return (
        <div>
            {loading ? (
                <div className="lds-roller">
                    <div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div>
                </div>
            ) : (
                users.map(user => (
                    <h1 key={user.id} className="state-item">
                        <Link to={`/card/${user.id}`} className="state-link">{user.name}</Link>
                    </h1>
                ))
            )}
        </div>
    );
}
