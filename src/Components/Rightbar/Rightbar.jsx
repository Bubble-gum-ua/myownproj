import React from "react";
import s from "./Rightbar.module.css";


const RightBar = () => {
    return (
        <div className={s.pogoda}>
            <a target="_blank" href="https://nochi.com/weather/kharkiv-19227"><img  src="https://w.bookcdn.com/weather/picture/3_19227_1_20_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=604&anc_id=46636"  alt="booked.net"/></a>
        
        </div>
    )
}

export default RightBar;