import React from 'react';
import "./About.css"
import Book1 from "./rasmosh/Rectangle 10.png"
import Active from "./active.jsx";

function About(props) {
    return (
        <div className="About">
<div className="Welcome">
   <h2 className={"welcomeh2"}>Welcome to Smart Academy</h2>
    <p className={"welcomwp"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor</p>
</div>
            <div className="rasm1">
                <img src={Book1} className={"book1"} alt=""/>
            </div>


            <div className="Our">
                <h2 className={"ourh2"}>our mission</h2>
                <p className={"ourp"}>Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt. Sed sit amet </p>


<Active/>






            </div>

        </div>
    );
}

export default About;