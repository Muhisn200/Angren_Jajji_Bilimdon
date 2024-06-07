import React from 'react';
import Logo from"../src/components/rasmlar/logo.png"
import Phon from"../src/components/rasmlar/phon.png"
import {Link} from 'react-router-dom'
import "./nav.css"
function Nav(props) {
    return (
        <div className="nav">
            <Link to="/"> <img src={Logo} className={"logo"} alt=""/>
            </Link>

            <div className="btn">
                <Link className={"l1"} to="/">Home</Link>
                <Link className={"l3"} to="/about">Bizhaqimizda</Link>
                <Link className={"l2"} to="/dar">Darslar</Link>
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