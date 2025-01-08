import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
// import {BsMedium} from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/lboitel",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/leo-paul-boitel/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "mailto:leopaul.boitel@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <BsFillPhoneFill size={50}/>
        }
    ]
}

export default footerConfig
