import React from 'react';
import styled from 'styled-components';
import Phon1 from"../rasmlar/phon.png"
import { CgInstagram } from "react-icons/cg";

import "./footer.css"
// Styled component for Footer
const FooterContainer = styled.footer`
    background-color: #2b2d30;
    color: #fff;
    text-align: center;
    padding: 20px;
    width: 100%;
    transition: all 0.3s ease-in-out;

 

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer className="footer1">

            <img src={Phon1} className={"phone01"} alt=""/>
            <a className={"inst"} href="https://www.instagram.com/_jajji_bilimdon_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><CgInstagram /></a>
            <a className={"ph1"}  href="tel:+998931883266">+998931883266</a>
            <a className={"ph2"} href="tel:+:+998930816378">+998930816378</a>
        </FooterContainer>
    );
}

export default Footer;
