import React from 'react';
import "./dars.css"
import Dars1 from "./rasmosh/Rectangle 20.png"
import Dars2 from "./rasmosh/Rectangle 20 (1).png"
import Dars3 from "./rasmosh/Rectangle 20 (2).png"
import Dars4 from "./rasmosh/Rectangle 20 (3).png"
import Dars5 from "./rasmosh/Rectangle 20 (4).png"
import Dars6 from "./rasmosh/Rectangle 20 (5).png"
import Dars7 from "./rasmosh/Rectangle 20 (6).png"
import Dars8 from "./rasmosh/Rectangle 20 (7).png"
import Footer from "../footer.jsx";
function Dars(props) {
    return (
        <div className="dars">
            <h2 className={"d1"}>Jajji Bilimdon bog’chasidagi kurslar</h2>



            {/*<div className="curs1">*/}
            <div className="curs"  data-aos="zoom-out-up">
                <img src={Dars1} alt=""/>
                <p className={"c1"}>Turli tadqiqotlar</p>
            </div> <div className="curs" data-aos="zoom-out-up">
                <img src={Dars2} alt=""/>
                <p className={"c1"}>Oyda 1 oshxonadagi darslar</p>
            </div> <div className="curs" data-aos="zoom-out-up">
                <img src={Dars3} alt=""/>
                <p className={"c1"}>Musiqa darslari</p>
            </div> <div className="curs" data-aos="zoom-out-up">
                <img src={Dars4} alt=""/>
                <p className={"c1"}>Yoz fasli uchun suzish kurslari</p>
            {/*</div>*/}
            </div>
            {/*<div className="curs2">*/}
            <div className="curs"  data-aos="zoom-out-up">
                <img src={Dars5} alt=""/>
                <p className={"c1"}>Qizlar uchun gimnastika , bolalar uchun kurash darslari</p>
            </div> <div className="curs" data-aos="zoom-out-up">
                <img src={Dars6} alt=""/>
                <p className={"c1"}>0 dan ingliz tili darslari</p>
            </div> <div className="curs" data-aos="zoom-out-up">
                <img src={Dars7} alt=""/>
                <p className={"c1"}>Bolalar qo’l mexnati darslari</p>
            </div> <div className="curs" data-aos="zoom-out-up">
                <img src={Dars8} alt=""/>
                <p className={"c1"}>Bolalar bilan tabiat qo’ynidagi sayohatlar</p>
            </div>
            <div className="footers">
                <Footer/>

            </div>
            {/*</div>*/}

        </div>
    );
}

export default Dars;