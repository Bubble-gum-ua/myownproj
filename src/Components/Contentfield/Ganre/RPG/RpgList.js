import React from "react";
import GameCard from "../../GameCardPage/GameCardPage";



const Rpg = (props) => {

    let gameElement = props.gamesList.rpg.map(g => <GameCard name={g.name} id={g.id} avatar={g.avatar}
                                                                    text={g.text} year={g.year} pcpreferences={g.pcpreferences}/>);
    return (

        <div>

            {gameElement}
        </div>
    )
};

export default Rpg;