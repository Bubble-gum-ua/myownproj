import React from "react";
import {connect} from "react-redux";
import GameCardSet from "./GameCardSet";


let mapStateToProps = (state) => {
    debugger;
        return {
        rpg: state.rpg
    }
}
let mapDispatchToProps = () => {
    return {}
}


const GameCardSetContainer = connect(mapStateToProps, mapDispatchToProps)(GameCardSet);

export default GameCardSetContainer;