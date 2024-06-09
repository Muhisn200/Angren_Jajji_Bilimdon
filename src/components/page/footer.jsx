import React from 'react';
import './footer.css';
import Iframe from 'react-iframe';
import "./camment.css"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import {Link} from "react-router-dom"; // CSS faylini import qilish
import Phon1 from"../page/../rasmlar/phon.png"
import Grupa from "./2page/grupa.jsx";

const Teacher = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">

                    <div className="map" data-aos="zoom-in">
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1698296523127!2d70.06869746243024!3d41.021540282294914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9f27abd0e5d%3A0x5939ad18fc2dd1fd!2s%22JAJJI%20BILIMDON%22%20bog&#39;chasi!5e0!3m2!1sen!2s!4v1717530634831!5m2!1sen!2s"
                            width="600px"
                            height="550px"
                            styles={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className={"maps1"}
                        />


                    </div>
                    <div className="card">
                        <div className="ish">
                            <div className="ish1">
                                <h3 style={{color: "white"}}>Bizning manzilimiz</h3>
                                <h4 style={{color: "white"}}> Toshkent Viloyati </h4>
                                <h4 style={{color: "white"}}> Angren shahar  </h4>
                                <h4 style={{color: "white"}}> Chotqol MFY </h4>
                                <h4 style={{color: "white"}}> Sabzazor kochasi 17 uy.</h4>

                            </div>
                            <hr className={"hr1"} style={{color: "white"}}/>
                            <div className="ish2" style={{color: "white"}}>
                                <h3 style={{color: "white"}}>Ish kunlari :</h3>
                                <h4 style={{color: "white"}}>Dushanba - Juma: 7:30 - 18:00 </h4>
                                <h4 style={{color: "white"}}>Shanba: 8:00 - 16:00</h4>
                                <h4 style={{color: "white"}}>Yakshanba: 8:00 - 16:00</h4>

                            </div>
                            <hr className={"hr2"}/>
                            <div className="ish3">
                                <h3 style={{color: "white"}}>Biz bilan bog`lanish </h3>
                                <a className={"a1"} href="tel:+998901133266">Telefon: +998901133266</a>
                                <a className={"a2"} href="tel:+998931883266">Telefon: +998931883266</a>
                                <a className={"a3"} href="tel:+998930816378">Telefon: +998930816378</a>
<p>Mushin_Xidoyatullaev_10.06.2024</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-column">

                </div>
                <div className="footer-column">


                    <div className="social-icons">
                        <div className="phon1">
                            <Link className={"f1"} to={"/"}>Bosh Menu</Link>
                            <Link className={"f3"} to={"/about"}>Biz Haqimizda</Link>
                            <Link className={"f2"} to={"/dar"}>Darslar</Link>
                            {/*<img src={Phon1} className={"phonee"} alt=""/>*/}
                            {/*<a className={"p1"} href="tel:+998931883266">+998931883266</a>*/}
                            {/*<a className={"p2"} href="tel:+998331123266">+998331123266</a>*/}
                        </div>


                    </div>
                </div>

            </div>
            <div className="syt">
                <Grupa />
                <a className={"inst"} href="https://www.instagram.com/_jajji_bilimdon_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw"><FaInstagram /></a>
                <a  href="https://www.youtube.com/channel/UC9-pWMcxWKbNfayVZXoq98A"><FaYoutube className={"ytb"}/>
                </a>
            </div>
        </footer>
    );
};

export default Teacher;