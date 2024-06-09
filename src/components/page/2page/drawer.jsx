import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./drawer.css"
import {Link} from "react-router-dom";
import Log from"../../rasmlar/logo.png"
import { ImDrawer } from "react-icons/im";
import {MenuFoldOutlined} from "@ant-design/icons";
import Navbot from "../../botnav/navbot.jsx";

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
                <MenuFoldOutlined />
                </h1>
            <Drawer
                title="Angren_Jajji_Bilimdon"
                onClose={onClose}
                open={open}
                width={250} // Bu yerda kenglikni kichikroq qilyapmiz
            >
                <div className="drwr">
                    <img className={"log"} src={Log} alt=""/>
                    <p className={"pdr"}>Jajji-Bilimdon</p>
                    <div className="drw1">
                        <Link to="/" style={{color: "black"}}>Bosh Menu</Link>
                    </div>
                    <div className="drw2">
                        <Link to="/about" style={{color: "black"}}>Biz Haqimizda</Link>
                    </div>
                    <div className="drw3">
                        <Link to="/dar" style={{color: "black"}}>Darslar</Link>
                    </div>
                    <div className="bott">
                        <Navbot/>
                    </div>
                    <a className={"dr1"} href="tel:+998931883266">+998931883266</a>
                    <a className={"dr2"} href="tel:+998901133266">+99890113266</a>
                    <a className={"dr2"} href="tel:+998930816378">+998930816378</a>

                </div>
            </Drawer>
        </div>
    );
};

export default App;
