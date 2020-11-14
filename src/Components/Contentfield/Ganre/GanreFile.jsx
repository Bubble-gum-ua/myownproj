import React from "react";

import {NavLink} from "react-router-dom";
import useStyles from "./../../Sidebar/Style"

const Genre = (props) => {
const classes = useStyles();
    return (
        <div className={`${classes.sidebar} ${classes.dropdown}`}>
            <div >
                <NavLink activeClassName={classes.button} to="/ganre/RPG">RPG</NavLink>
            </div>
            <div>
                <NavLink activeClassName={classes.button} to="/ganre/Battleroyals">Battleroyals</NavLink>
            </div>
        </div>
    )
};


export default Genre;