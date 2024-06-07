import React from 'react';
import './footer.css';
import {Link} from "react-router-dom"; // CSS faylini import qilish
import Phon1 from"../page/../rasmlar/phon.png"

const Teacher = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">


                </div>
                <div className="footer-column">

                    <Link className={"f1"} to={"/"}>home</Link>

                    <Link className={"f3"} to={"/about"}>About</Link>
                    <Link className={"f2"} to={"/dar"}>Dars</Link>
                </div>
                <div className="footer-column">



                    <div className="social-icons">
                        <div className="phon1">
                            <img src={Phon1} className={"phonee"} alt=""/>
                            <a className={"p1"} href="tel:+998931883266">+998931883266</a>
                            <a className={"p2"} href="tel:+998331123266">+998331123266</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Teacher;