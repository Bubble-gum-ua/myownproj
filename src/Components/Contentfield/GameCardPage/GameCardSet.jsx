import React from "react";
import GameCard from "./GameCardPage";


const GameCardSet = (props) => {


    let gameElement = props.gamesList.map(g => <GameCard name={g.name} avatar={g.avatar} text={g.text}/>);
    debugger;
    return (
        <div>
            {gameElement}
      {/*      <GameCard name={props.name} avatar={props.avatar}/>*/}
        </div>
    )
}

export default GameCardSet;