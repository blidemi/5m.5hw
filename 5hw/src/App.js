import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/usersSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card/:id" element={<Card />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
