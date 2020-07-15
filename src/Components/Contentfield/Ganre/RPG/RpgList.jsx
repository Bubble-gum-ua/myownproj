import React from "react";
import Gamegrid from "../../GameCardPage/Maingamesgrid";
import {NavLink} from "react-router-dom";


const Rpg = (props) => {

    let state = props.gamesnameslist;

    let gameElement = state.wowclassic.map(g =><Gamegrid name={g.name} id={g.id} avatar={g.avatar}/>);
    let secondEl = state.wowbc.map(s =><Gamegrid name={s.name} id={s.id} avatar={s.avatar}/>);

    return (

        <div>
            <div>
                <NavLink to="/ganre/RPG/WowClassic"> {gameElement} </NavLink>
            </div>
            <div>
                <NavLink to="/ganre/RPG/WowBC"> {secondEl} </NavLink>
            </div>


            {/*{gameElement}*/}
        </div>
    )
};

export default Rpg;