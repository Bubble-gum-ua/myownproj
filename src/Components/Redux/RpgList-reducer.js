import React from "react";


let initialState ={
gamesnameslist:{
    wowclassic: [{
        name: <h3>WoW: Classic</h3>,
        id: 0,
        avatar: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Tyl9FN_8akyLQ-A7_Bmg0TZAU18fyVDRwaP_sPv_o8JBtYNy&usqp=CAU"/>
    },],
        wowbc:[ {
        name: <h3>Wow: Burning Crusade</h3>,
        id: 1,
        avatar: <img src="https://banner2.cleanpng.com/20180824/xir/kisspng-world-of-warcraft-the-burning-crusade-world-of-wa--5b80329d136157.5189334915351282210794.jpg"/>

    }]}};


const rpgListReducer = (state = initialState)=> {
    return{
        state
    }
};

export default rpgListReducer;