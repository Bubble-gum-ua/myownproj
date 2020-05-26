import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Classes from "./Components/Sidebar/Sidecomponents/Classes";
import HeadBar from "./Components/Headbar/Headbar";
import Genre from "./Components/Contentfield/Ganre/GanreFile";
import Rpg from "./Components/Contentfield/Ganre/RPG/RpgList";
import Battleroyals from "./Components/Contentfield/Ganre/Battleroyals/Battleroyals";
import RightBar from "./Components/Rightbar/Rightbar";


function App(props) {

    return (
        <div className="mainWrapp">
            <div className="mainHead">
                <HeadBar/>
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
                <Route path="/ganre/RPG" render={() => <Rpg gamesList={props.state.gamesList}/>}/>
                <Route path="/ganre/Battleroyals" render={() => <Battleroyals gamesList={props.state.gamesList}/>}/>
            </div>
            <div className="mainRighbar">
                <RightBar/>
            </div>
        </div>
    );
}

export default App;

