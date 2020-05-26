import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <nav className={s.sideBar}>
            <div>
                <NavLink to="/classes">Classes</NavLink>
            </div>
            <div>
                <NavLink to="/ganre">Ganre</NavLink>
            </div>
            <div>
                <NavLink to="/author"> Author </NavLink>
            </div>
            <div>
                <NavLink to="/country">Country</NavLink>
            </div>
            <div>
                <NavLink to="/music">Music</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;

