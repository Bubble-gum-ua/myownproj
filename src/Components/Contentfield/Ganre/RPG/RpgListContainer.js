import React from "react";
import Rpg from "./RpgList";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        gamesnameslist: state.rpgList.state.gamesnameslist
    }
}
let mapDispatchToProps = () => {
    return {}
}


const RpgListContainer = connect(mapStateToProps, mapDispatchToProps)(Rpg);

export default RpgListContainer;