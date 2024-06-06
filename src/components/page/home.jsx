import React from 'react';
import "./home.css"
import Grl from "../rasmlar/super-kid.png"
import Qush1 from "../rasmlar/lightBlueQuotation-c1e33e55045dace856720b23fd131e12.png"
import Qush2 from "../rasmlar/Vector (2).png"
// import Gram from"../rasmlar/Group.png"
// import Chiziq from"../rasmlar/Vector (1).png"
import Darslar from "./darslar.jsx";
import Aqil from "./aqil.jsx";
import Talab from "./talab.jsx";
import Bilimdon from "./bilimdon.jsx";
import Camment from "./camment.jsx";
import Footer from "./footer.jsx";
import Bot01 from "./botlar/bot01.jsx";
function Home(props) {
    return (
        <div className="Home">
            {/*<div className="telegram">*/}
            {/*    <img className={"gram"} src={Gram} alt=""/>*/}
            {/*    <img className={"chiziq"} src={Chiziq} alt=""/>*/}
            {/*</div>*/}
            <div className="text">

                <h1 className={"texth1"}>Qanday qilib bolalarni Ingliz tili  Rus tili , Mental
                    arifmetika va boshqa darslarga qiziqtirish mumkun ?</h1>
                <p className={"textp"}>o’z joyingizni band qiling</p>


                <div className="yosh" >
                    <button className={"yosh-1"}>1-yosh</button>
                    <button className={"yosh-2"}>2-yosh</button>
                    <button className={"yosh-3"}>3-yosh</button>
                    <button className={"yosh-4"}>4-yosh</button>
                    <button className={"yosh-5"}>5-yosh</button>
                    <button className={"yosh-6"}>6-yosh</button>
                    <button className={"bosh"}>bo’sh joylar soni chegaralangan, shoshiling</button>
                    <p className={"yoshp"}>oylik narx 700.000 so’m , bolalar soniga qarab <span>8% dan 10% gacha</span>
                        chegirmalar </p>
                    <h5 className={"yoshh5"}>joyingizni band qilishga ulgurib qolin : </h5>

    <Bot01/>



                </div>
            </div>
            <div className="imge">

                <img className={"qush1"} src={Qush1} alt=""/>
                <img className={"grl"} src={Grl} alt=""   data-aos-duration="1800"    data-aos="fade-up"
                     data-aos-anchor-placement="top-center"/>
                <img className={"qush2"} src={Qush2} alt=""  />
            </div>
            <div className="dars1">
                <Darslar/>
            </div>
            <div className="Aqil1">
                <Aqil/>
            </div>
            <div className="Talab1">
                <Talab/>
            </div>
            <div className="Bilimdon1">
                <Bilimdon/>
            </div>
            <div className="Camment1">
                <Camment/>
            </div>
            <div className="Footer1">
                <Footer/>
            </div>
        </div>
    );
}

export default Home;








