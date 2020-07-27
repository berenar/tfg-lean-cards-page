import React from 'react';
import './AllStyles.css';

function Footer(props) {
    return (
        <div className="Footer_container">
            <footer> {props.title} ©{props.year} Created by {props.author}</footer>
            <br />
        </div>
    )
}

export default Footer;