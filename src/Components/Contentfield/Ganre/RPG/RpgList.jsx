import React from "react";
import GameCard from "../../GameCardPage/GameCardPage";
import Gamegrid from "../../GameCardPage/Maingamesgrid";
import {NavLink} from "react-router-dom";


const Rpg = (props) => {

    /* let gameElement = props.gamesList.rpg.map(g => <GameCard name={g.name} id={g.id} avatar={g.avatar}
                                                                     text={g.text} year={g.year} pcpreferences={g.pcpreferences}/>);*/

    let gameElement = props.gamesList.gamesnameslist.wowclassic.map(g =><Gamegrid name={g.name} id={g.id} avatar={g.avatar}/>);
    let secondEl = props.gamesList.gamesnameslist.wowbc.map(s =><Gamegrid name={s.name} id={s.id} avatar={s.avatar}/>);
    debugger;
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