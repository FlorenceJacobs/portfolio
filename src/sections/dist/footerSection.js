"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./footerSection.scss");
var ContactSection = function () {
    return (<div className="row">
        <div className="container contact-container">
            <div className="contact-col">
                <span className="pink-bar">
                    <i className="material-icons">mail</i>&nbsp;<a className="link-contact" href="mailto:florencejacobs85@gmail.com">florencejacobs85@gmail.com</a>
                </span>
            </div>
            <div className="contact-col padd-left">
                <span className="pink-bar">
                    <i className="material-icons">phone_android</i>&nbsp;<a className="link-contact" href="tel:+32492865800">+ 32 492 865 800</a>
                </span>
            </div>
            <div className="contact-col padd-left">
                <span className="pink-barLinkedIn pinkbar">
                <a href="https://www.linkedin.com/in/florence-jacobs/" className="link-contact" target="_blank"><i className="fab fa-2x fa-linkedin"></i></a>&nbsp;<a href="https://github.com/FlorenceJacobs" className="link-contact" target="_blank"><i className="fab fa-2x fa-github-square"></i></a>
                </span>
            </div>
        </div>
    </div>);
};
exports["default"] = ContactSection;
