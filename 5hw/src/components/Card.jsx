import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Card() {
    const { id } = useParams();
    const users = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    if (loading) {
        return (
            <div className="lds-roller">
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
            </div>
        );
    }

    if (error) {
        return <h1>Ошибка:{error}</h1>;
    }

    const user = users.find(element => element.id === Number(id));
    if (!user) {
        return <h1>Такого пользователя нет!</h1>;
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <nav>
                <ul>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Website: {user.website}</li>
                </ul>
            </nav>
            <Link to="/" className="home-link">Go home</Link>
        </div>
    );
}