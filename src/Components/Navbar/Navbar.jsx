import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="mainNav">
            <ul className="nav-list">
                <li className="nav-item"><NavLink className={s.link} activeClassName={s.active} to='/profile'>Profile</NavLink></li>
                <li className="nav-item"><NavLink className={s.link} activeClassName={s.active} to='/dialogs'>Messages</NavLink></li>
                <li className="nav-item"><NavLink className={s.link} activeClassName={s.active} to='/news'>News</NavLink></li>
                <li className="nav-item"><NavLink className={s.link} activeClassName={s.active} to='/music'>Music</NavLink></li>
                <li className="nav-item"><hr /></li>
                <li className="nav-item"><NavLink className={s.link} activeClassName={s.active} to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}


export default Navbar;