import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <nav className={s.sideBar}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/classes" activeClassName={s.active}>Classes</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/ganre" activeClassName={s.active}>Ganre</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/author" activeClassName={s.active}> Author </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/country" activeClassName={s.active}>Country</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;

