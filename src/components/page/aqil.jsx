import React from 'react';
import "./aqil.css"
import Fonaqil from "../rasmlar/003.png"
import Hayoliy from "../rasmlar/image 11.png"
import Ingliz from "../rasmlar/image 12.png"
import Rus from "../rasmlar/image 13.png"
import Dekoratsiya from "../rasmlar/image 14.png"
import Aimge from"../rasmlar/Rectangle.png"
function Aqil(props) {
    return (
        <div className="Aqil">
            <div className="pagea">
                <img className={"fonaql"} src={Fonaqil} alt="" data-aos="flip-down" data-aos-duration="1000" />
                <img className={"aimge"} src={Aimge} alt=""  data-aos="flip-down" />
                <h2 className={"h2aql"}>Aqliy fikrlash va har doim birinchilrdan bo’lish </h2>
                <p className={"paql"}>4-6 yoshgacha bolgan bolalarning 1dan 100 gacha bolgan sonlar bilan  tezda misollarni yechishni o’rganadilar</p>
            </div>
            <div className="cardaqil">
                <div className="card-a1" data-aos="zoom-out-up" >
                    <img className={"hayoliyimg"} src={Hayoliy} alt=""/>
                    <h2 className={"card1h2"}>Hayoliy raqamlar bilan ishlash</h2>
                    <p className={"card1p"}>i4-6 yoshgacha bolgan bolalarning 1dan 100 gacha bolgan sonlar bilan  tezda misollarni yechishni o’rganadilar</p>
                </div>
                <div className="card-a1" data-aos="zoom-out-up">
                    <img className={"hayoliyimg"} src={Ingliz} alt=""/>
                    <h2 className={"card1h2"}>Indliz tili</h2>
                    <p className={"card1p"}>ingliz tilida sanash , ob havo, xol ahvol xar hil mavzularda shaxsiy fikr bildira oladigan darajada mukammal ta’lim berish</p>
                </div>
                <div className="card-a1" data-aos="zoom-out-up">
                    <img className={"hayoliyimg"} src={Rus} alt=""/>
                    <h2 className={"card1h2"}>Rus tili</h2>
                    <p className={"card1p"}>rus alifbosini o’rganib o’qish va yozishni bundan tashqari rus tilida bemalol gaplasha olish imkoniyatini beradi</p>
                </div>
                <div  className="card-a1" data-aos="zoom-out-up" >
                    <img className={"hayoliyimg"} src={Dekoratsiya} alt=""/>
                    <h2 className={"card1h2"}>Dekoratsiya</h2>
                    <p className={"card1p"}>bola miyyasining har tomonlama ishlashi uchun rassomchilik va ( mehnat )darslari . siz bu darslar bilan farzandingiz yasagan narsalar , chizgan rasmlardan psixollogning maxsus tavsiyalarini olishingiz mumkun</p>
                </div>




            </div>
        </div>
    );
}

export default Aqil;