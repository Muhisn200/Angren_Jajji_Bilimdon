import React from 'react';
import "./talab.css"
import Tfon from "../rasmlar/001.png"
import Cardt1 from"../rasmlar/Frame 17.png"
import Cardt2 from"../rasmlar/Frame 17 (1).png"
import Cardt3 from"../rasmlar/Frame 17 (2).png"
import Ttfon from"../rasmlar/k-2-a35f7355b999942ea4b61c8b7639a2f0.png"
function Talab(props) {
    return (
        <div className="Talab">
            <img className={"tfon"} src={Tfon} alt="" />
            <img className={"ttfon"} src={Ttfon} alt="" data-aos="zoom-out"/>
            <div className="ttext">
                <h1 className={"ttexth1"}>o’z talabingizni yozing</h1>
                <h2 className={"ttexth2"}>1. birinchi bo’lib , farzandingizning yoshi va guruhini tanlang</h2>
                <h3 className={"ttexth3"}> Bu savol talab qilinadi. *</h3>
            </div>

            <div className="cardt" data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1600" >
                <img className={"cardt1"} src={Cardt1} alt=""/>
                <h2 className={"cardth2"}>Yosh</h2>
                <h3 className={"cardth3"}>1-2</h3>
            </div>
            <div className="cardt2"  data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="2100">
                <img className={"cardt1"} src={Cardt2} alt=""/>
                <h2 className={"cardth2"}>Yosh</h2>
                <h3 className={"cardth3"}>3-4</h3>
            </div>
            <div className="cardt3" data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="2600">
                <img className={"cardt1"} src={Cardt3} alt=""/>
                <h2 className={"cardth2"}>Yosh</h2>
                <h3 className={"cardth3"}>5-6</h3>
            </div>


        </div>
    );
}

export default Talab;