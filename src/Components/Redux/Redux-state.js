import {combineReducers,createStore} from "redux";
import rpgListReducer from "./RpgList-reducer";
import rpgReducer from "./Rpg-reducer";
import battleroyalsReducer from "./Battleroyalls-reducer";

let reducers= combineReducers( {

    rpgList: rpgListReducer,
    rpg: rpgReducer,
    battleroyal: battleroyalsReducer
})

let store =createStore(reducers);

window.store = store;

export default store;