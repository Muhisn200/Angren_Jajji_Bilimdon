import React from 'react';
import "./bilimdon.css"
import Bcard1 from"../rasmlar/amir1.png"
import Bcard2 from"../rasmlar/alisa2.png"
import Fonb from"../rasmlar/ras1.png"
import Bilimg from"../rasmlar/0064.png"
function Bilimdon(props) {
    return (
        <div>
            <div className="Bilimdon">
                <img className={"bilimge"} src={Bilimg} alt=""  />

                <img className={"bilimdon1"} src={Fonb} alt=""  data-aos="fade-down"/>
                <div className="bb">
                    <img className={"bcard1"} src={Bcard1} alt="" data-aos="fade-up-right"/>

                </div>
                <div className="aa">
                    <img className={"bcard2"} src={Bcard2} alt=""  data-aos="fade-up-left"/>
                </div>
            </div>

        </div>
    );
}

export default Bilimdon;