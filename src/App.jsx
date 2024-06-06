import React, {useEffect} from 'react';
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Home from"./components/page/home.jsx"
import Nav from"./nav.jsx"
import Darslar from "./components/page/darslar.jsx";
import Aqil from "./components/page/aqil.jsx";
import Talab from "./components/page/talab.jsx";
import Bilimdon from "./components/page/bilimdon.jsx";
import Camment from "./components/page/camment.jsx";
import Bot01 from "./components/page/botlar/bot01.jsx";
import Aos from"aos"
import Dars from "./components/page/2page/dars.jsx";
import About from "./components/page/2page/About.jsx";
function App(props) {
    useEffect(() => {
        Aos.init()
    }, []);
    return (
        <div className="App">
            <Nav/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/dars" element={<Darslar/>} />
                <Route exact path="/aql" element={<Aqil/>} />
                <Route exact path="/talab" element={<Talab/>} />
                <Route exact path="/bilimdon" element={<Bilimdon/>} />
                <Route exact path="/camment" element={<Camment/>} />
                <Route exact path="/bot" element={<Bot01/>} />
                <Route exact path="/dar" element={<Dars/>} />
                <Route exact path="/about" element={<About/>} />
            </Routes>
        </div>
    );
}

export default App;