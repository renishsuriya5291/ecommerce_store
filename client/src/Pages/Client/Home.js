// src/Pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withAuthRedirect from '../../Components/withAuthRedirect';


const CHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    return (
        <div className="p-5">
            <h2>CHome</h2>
        </div>
    );
};

export default withAuthRedirect(CHome);
