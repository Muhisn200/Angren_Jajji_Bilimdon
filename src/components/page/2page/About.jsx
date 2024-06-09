import React from 'react';
import "./About.css"
import Book1 from "./rasmosh/Rectangle 10.png"
import Dars from "./dars.jsx";

function About(props) {
    return (
        <div className="About">
<div className="Welcome">
   <h2 className={"welcomeh2"}>Jajji Bilimdon bog’chasiga xush kelibsiz </h2>
    <p className={"welcomwp"}>Bolalarning aqlan ham jismonan komillikka yetishishi uchun oliy darajadagi oq’tuvchilar,va xoslangan darslar. jajji bilimdon bilan bolangizni maktab ta’limiga osson o’tishishida ko’makchi bo’ling.</p>
</div>
            <div className="rasm1">

                <img src={Book1} className={"book1"} alt=""/>
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