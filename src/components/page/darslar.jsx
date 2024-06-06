import React from 'react';
import "./darslar.css"
import Call from "../rasmlar/KID 02-01.png"
import Book from "../rasmlar/image 16.png"
import Yosdan1 from "../rasmlar/image 17.png"
import Mental from "../rasmlar/image 4.png"

function Darslar(props) {
    return (
        <div className="Darslar">
            <h1 className={"darslarh1"}>Darslarni tez va mukammal o’rganish + Eng yaxshi o’qituvchilar  Hammasi bizda
                </h1>

            <div className="cardlar">
                <div className="card-1" data-aos="fade-down" data-aos-duration="1600">
                    <img className={"books"} src={Book} alt=""/>
                    <h3 className={"booksh3"}>Professional dasturlar bilan bolalarning ta’lim olishiga ko’maklashish
                    </h3>
                    <p className={"booksp1"}>ixtisoslashgan darslar 4-yoshdan 6 yoshgacha</p>
                    <p className={"booksp2"}>bolalar zerikmasligi va tez organishi uchun , ularning qiziqishlariga qarab
                        yo’naltirish</p>
                    <p className={"booksp3"}>har bir o’rganuvchi uchun maxsus ta’lim asboblari</p>
                </div>
                <div className="card-2" data-aos="fade-down" data-aos-duration="2200">
                    <img className={"books"} src={Yosdan1} alt=""/>
                    <h3 className={"cbooksh3"}>1-yoshdan 4 -yoshgacha shaxsiy rivojlanish
                    </h3>
                    <p className={"cbooksp1"}>bolalar xotirasini kuchaytirish uchun maxsus o’yinchoqlar</p>
                    <p className={"cbooksp2"}>kundalik o’rgangan narsalarini so’rash , ularga qiziqish bildirish</p>
                    <p className={"cbooksp3"}>bolalarga mativatsiya berish uchun sayoxatlar</p>
                </div>
                <div className="card-3" data-aos="fade-down" data-aos-duration="2600">
                    <img className={"books"} src={Mental} alt=""/>
                    <h3 className={"dbooksh3"}>Maxsus Mental Arifmetika darsligi
                    </h3>
                    <p className={"dbooksp1"}>maktab talimidan oldin ularni varoqda emas miyyalarida </p>
                    <p className={"dbooksp2"}>murakkab sonlarni yechishga tayyorlash</p>
                    <p className={"dbooksp3"}>bolalar aqliy o’sishi uchun ular bilan aloxida o’tkiziladigan darslar</p>
                </div>


                <img className={"call"} src={Call} alt="" data-aos="fade-down" data-aos-duration="3000"/>


            </div>
        </div>
    );
}

export default Darslar;