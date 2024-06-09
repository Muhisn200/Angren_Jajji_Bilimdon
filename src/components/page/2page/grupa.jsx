import React from 'react';
import { FaTelegram } from "react-icons/fa";
const App = () => {
    const goToTelegram = () => {
        window.location.href = 'https://t.me/+WadUBgqBsJpiMTEy';
    };

    return (
        <h1 onClick={goToTelegram} style={{fontSize:"32px"}}>
            <FaTelegram />
        </h1>
    );
};

export default App;
