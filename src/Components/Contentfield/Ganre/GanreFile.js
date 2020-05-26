import React from "react";

import {NavLink} from "react-router-dom";


const Genre = (props) => {

    return (
        <div>
            <div>
                <NavLink to="/ganre/RPG">RPG</NavLink>
            </div>
            <div>
                <NavLink to="/ganre/Battleroyals">Battleroyals</NavLink>
            </div>
        </div>
    )
};


export default Genre;