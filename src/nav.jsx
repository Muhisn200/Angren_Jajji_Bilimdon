import React from 'react';
import Logo from"../src/components/rasmlar/logo.png"
import Phon from"../src/components/rasmlar/phon.png"
import "./nav.css"
function Nav(props) {
    return (
        <div className="nav">
            <img src={Logo} className={"logo"} alt=""  data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1000"/>
            <div className="btn">
                {/*<button className={"about"}>About</button>*/}
            </div>
            <div className="phon">
                {/*<img src={Phon} className={"phonee"} alt=""/>*/}
                {/*<a className={"p1"} href="tel:+998931883266">+998931883266</a>*/}
                {/*<a className={"p2"} href="tel:+998331123266">+998331123266</a>*/}
            </div>
            <div className="malumot">
            </div>
        </div>
    );
}

export default Nav;