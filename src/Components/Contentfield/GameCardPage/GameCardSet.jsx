import React from "react";
import GameCard from "./GameCardPage";


const GameCardSet = (props) => {

    let state = props.rpg.state;

    debugger;


    let gameElement = state.rpg.map(g => <GameCard name={g.name} avatar={g.avatar} key={g.id} text={g.text}/>);

    return (
        <div>
            {gameElement}

        </div>
    )
}

export default GameCardSet;