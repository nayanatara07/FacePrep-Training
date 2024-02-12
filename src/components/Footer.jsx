import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="footer flex space-around">
            <div className="footer-socials  flex space-around">
                <a href="https://www.linkedin.com/in/nayanatara07" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/nayanatara07" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
            </div>
        </div>

    );
};

export default Footer;