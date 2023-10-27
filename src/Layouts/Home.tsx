import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './style.css';
const Home = () => {
    const navigate = useNavigate();
    useLayoutEffect(()=>{
        console.log("home layout is callig ");
        let isLogin = window.localStorage.getItem("isLogged");
        if(!!!isLogin && isLogin !== "true"){
            navigate('/login');
        }
    },[]);
    return <div>
        <div className='header'>
            <h3>Landing Page</h3>
            <div className="menu">
                <Link to='/ems' className='link'>ems</Link><br />
                <Link to="/expense-tracker" className='link'>expense tracker</Link>
                <span className='link' onClick={()=>{
                    window.localStorage.removeItem('isLogged');
                    navigate('/login');
                }}>Logout</span>
            </div>
        </div>

        <Outlet />
    </div>
}

export default Home;