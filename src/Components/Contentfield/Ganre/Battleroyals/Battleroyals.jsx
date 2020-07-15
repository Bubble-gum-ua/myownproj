import React from "react";

import GameCard from "../../GameCardPage/GameCardPage";


const Battleroyals = (props) => {
debugger;
    let state = props.battleroyal;
        let gameElement = state.battleroyal.map(g => <GameCard name={g.name} id={g.id} avatar={g.avatar}
                                                              text={g.text}/>);

    return (

        <div>

           {gameElement}
        </div>
    )
};

export default Battleroyals;