import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Classes from "./Components/Sidebar/Sidecomponents/Classes";
import Headbar from "./Components/Headbar/Headbar";
import Genre from "./Components/Contentfield/Ganre/GanreFile";
import RightBar from "./Components/Rightbar/Rightbar";
import RpgListContainer from "./Components/Contentfield/Ganre/RPG/RpgListContainer";
import BattleroyalsContainer from "./Components/Contentfield/Ganre/Battleroyals/BattleroyalsContainer";
import GameCardSetContainer from "./Components/Contentfield/GameCardPage/GameCardSetContainer";


function App() {

    return (
        <div className="mainWrapp">
            <div className="mainHead">
                <Headbar/>
            </div>
            <div className="mainSidebar">
                <h3> Our games field</h3>
                <Sidebar/>
                <div>
                    <Route path="/classes" render={() => <Classes/>}/>
                    <Route path="/ganre" render={() => <Genre/>}/>
                </div>
            </div>
            <div className="mainBody">
                MainBody
                <Route path="/ganre/RPG" render={() =>
                    <RpgListContainer/>}/>

                <Route path="/ganre/RPG/WowClassic"
                       render={() => <GameCardSetContainer/>}/>
                <Route path="/ganre/RPG/WowBc" render={() => <GameCardSetContainer/>}/>
                <Route path="/ganre/Battleroyals" render={() => <BattleroyalsContainer/>}/>

            </div>
            <div className="mainRighbar">
                <RightBar/>
            </div>
        </div>
    );
}

export default App;

