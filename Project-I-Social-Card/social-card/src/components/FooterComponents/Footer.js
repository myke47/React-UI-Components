import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footbox">

        <div className="comment">

        <FontAwesomeIcon 
            icon="arrow-up"
            color="crimson"
            size="3x"
        />
        
        </div>

        <div className="shares">

        <FontAwesomeIcon 
            icon="arrow-down"
            color="crimson"
            size="3x"
        />

        </div>

        <div className="saves">

        <FontAwesomeIcon 
            icon="bookmark"
            color="crimson"
            size="3x"
        />

        </div>

        <div className="send">
        <FontAwesomeIcon 
            icon="share"
            color="crimson"
            size="3x"
        />

        </div>

        </div>
    );
};

export default Footer;