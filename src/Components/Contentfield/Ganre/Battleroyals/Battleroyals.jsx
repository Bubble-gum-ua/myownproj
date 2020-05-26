import React from "react";

import {NavLink} from "react-router-dom";
import GameCard from "../../GameCardPage/GameCardPage";


const Battleroyals = (props) => {
    let gameElement = props.gamesList.battleroyal.map(g => <GameCard name={g.name} id={g.id} avatar={g.avatar}
                                                              text={g.text}/>);

    return (

        <div>

           {gameElement}
        </div>
    )
};

export default Battleroyals;