import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./drawer.css"
import {Link} from "react-router-dom";
import Log from"../../rasmlar/logo.png"
import { ImDrawer } from "react-icons/im";

const App = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div  >
            <h1 type="primary"  className={"btnd"} onClick={showDrawer}>
                <ImDrawer />
                </h1>
            <Drawer
                title="Basic Drawer"
                onClose={onClose}
                open={open}
                width={250} // Bu yerda kenglikni kichikroq qilyapmiz
            >
                <div className="drwr">
                    <img className={"log"} src={Log} alt=""/>
<p className={"pdr"}>Jajji-Bilimdon</p>
                    <div className="drw1">

                        <Link to="/">Home</Link>
                    </div>
                    <div className="drw2">
                        <Link to="/about">Bizhaqimizda</Link>
                    </div>
                    <div className="drw3">
                        <Link to="/dar">Darslar</Link>
                    </div>

                        <a className={"dr1"} href="tel:+998931883266">+998931883266</a>
                        <a className={"dr2"} href="tel:+998331123266">+998331123266</a>

                </div>
            </Drawer>
        </div>
    );
};

export default App;
