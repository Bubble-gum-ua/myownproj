import React from "react";
import {connect} from "react-redux";
import Battleroyals from "./Battleroyals";


let mapStateToProps = (state) => {
    debugger;
        return {
        battleroyal: state.battleroyal.state
    }
}
let mapDispatchToProps = () => {
    return {}
}


const BattleroyalsContainer = connect(mapStateToProps, mapDispatchToProps)(Battleroyals);

export default BattleroyalsContainer;