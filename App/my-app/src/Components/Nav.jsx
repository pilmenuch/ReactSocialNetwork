import React from 'react';
import './Nav.css'
import { NavLink} from "react-router-dom";
import 'antd/dist/antd.css';


const Nav = () => {
    return (

        <nav className='nav'>
            <div><NavLink to="/main">Main</NavLink></div>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music"> Music</NavLink></div>
            <div><NavLink to="/users">Users</NavLink></div>
            <div><NavLink to="/slider">Slider</NavLink></div>

        </nav>

    );
}

export default Nav;