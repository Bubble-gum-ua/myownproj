import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css"
import useStyles from "./Style"


const Sidebar = () => {

    const classes = useStyles();

    return (
        <nav className={classes.sidebar}>
            <div className={`${classes.a} ${s.active}`}>
                <NavLink to="/classes" activeClassName={classes.button}>Classes</NavLink>
            </div>
            <div className={`${classes.a} ${s.active}`}>
                <NavLink to="/ganre" activeClassName={classes.button}>Ganre</NavLink>
            </div>
            <div className={`${classes.a} ${s.active}`}>
                <NavLink to="/author" activeClassName={classes.button}> Author </NavLink>
            </div>
            <div className={`${classes.a} ${s.active}`}>
                <NavLink to="/country" activeClassName={classes.button}>Country</NavLink>
            </div>
            <div className={`${s.active} ${classes.a} `}>
                <NavLink to="/music" activeClassName={classes.button}>Music</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;

