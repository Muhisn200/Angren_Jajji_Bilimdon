import React from 'react';
import "./About.css"
import Book1 from "./rasmosh/Rectangle 10.png"
import Dars from "./dars.jsx";

function About(props) {
    return (
        <div className="About">
<div className="Welcome">
   <h2 className={"welcomeh2"}>Jajji Bilimdon bog’chasiga xush kelibsiz </h2>
    <p className={"welcomwp"}>Jajji bilimdon bog`chasi 2022-yil iyun oyidan boshlab 1 yoshdan 6 yoshgacha bo`lgan bolalarni qabul qilishni boshlagan . Bog'cha Rus tiliga ixtisoslashgan  bo'lib , qo'shimcha ravishda quyidagi darslar o'tiladi ;
        Ingliz tili,
        rus tili,
        Mental Arifmetika,
        Logoped,
        Karate,
        Gimnastika,
        Massaj,
        Musiqa.
        Farzandingizning kelajagi o'z qo'lingizda , JAJJI BILIMDON bilan hammasi oson.  </p>
</div>
            <div className="rasm1">

                <img src={Book1} className={"book1"} alt=""  data-aos="zoom-out-up"/>
                <div className="son">


                    <div className="son1">
                        <h1>4+</h1>
                        <p>yillik tajriba</p>
                    </div>
                    <div className="son1">
                        <h1>10+</h1>
                        <p> dars turlari</p>
                    </div>
                    <div className="son1">
                        <h1>200+</h1>
                        <p>aktivlik</p>
                    </div>
                </div>

            </div>

            {/*<div className="ftr">*/}
            {/*    <Footer/>*/}

            {/*</div>*/}

            <div className="dr">
                <Dars/>

            </div>
        </div>
    );
}

export default About;