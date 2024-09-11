// src/Pages/Home.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        navigate('/signin');
    }

    return (
        <div className="p-5">
            <h2>CHome</h2>
        </div>
    );
};

export default CHome;
