import React from "react";
import s from "./GameCard.module.css"



const GameCard = (props) => {




    return (
        <div>
            <div className={s.allstyle}>
                {props.name} {props.avatar} {props.text}
            </div>
        </div>
    )
};

export default GameCard;



