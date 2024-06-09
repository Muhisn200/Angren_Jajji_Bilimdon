import React from 'react';
import Logo from"../src/components/rasmlar/logo.png"
import Phon from"../src/components/rasmlar/phon.png"
import {Link} from 'react-router-dom'
import "./nav.css"
import Drawer from "./components/page/2page/drawer.jsx";
import Navbot from "./components/botnav/navbot.jsx";
function Nav(props) {
    return (
        <div className="nav">
            <Link to="/"> <img src={Logo} className={"logo"} alt=""/>
            </Link>
<p className={"drp"}>            Jajji-bilimdon
</p>
            <div className="btn">
                <Link className={"l1"} to="/">         Bosh Menu</Link>
                <Link className={"l3"} to="/about">     Biz Haqimizda</Link>
                <Link className={"l2"} to="/dar">      Darslar</Link>

<div className="nvbt">
    <Navbot/>

</div>


                {/*<button className={"about"}>About</button>*/}
<div className="drw">
    <Drawer/>

</div>
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