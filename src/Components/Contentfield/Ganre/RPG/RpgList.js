import React from "react";
import GameCard from "../../GameCardPage/GameCardPage";
import {NavLink} from "react-router-dom";


const Rpg = (props) => {

    let gameElement = props.gamesList.rpg.map(g => <GameCard name={g.name} id={g.id} avatar={g.avatar}
                                                                    text={g.text}/>);
    return (

        <div>

            {gameElement}
        </div>
    )
};

export default Rpg;