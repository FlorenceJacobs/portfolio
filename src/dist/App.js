"use strict";
exports.__esModule = true;
var react_1 = require("react");
var headerSection_1 = require("./sections/headerSection");
var contactSection_1 = require("./sections/contactSection");
var navbarSection_1 = require("./sections/navbarSection");
var projectsSection_1 = require("./sections/projectsSection");
var aboutSection_1 = require("./sections/aboutSection");
require("./App.scss");
var materialize_css_1 = require("materialize-css");
var App = function () {
    react_1.useEffect(function () {
        var paral = document.querySelectorAll('.parallax');
        materialize_css_1["default"].Parallax.init(paral, {});
    }, []);
    return (<div>
        <navbarSection_1["default"] />
        <headerSection_1["default"] />
        <contactSection_1["default"] colorBar="pink-bar" colorBarLinkIn="pink-barLinkedIn pinkbar" colorBg="transparent" colorIcon="material-icons" colorIconLinkIn="fab fa-2x fa-linkedin" colorIconGithub="fab fa-2x fa-github-square" colorFooter="row"/>
        <div className="parallax-container">
            <div className="parallax">
                <img src="../../assets/bubble_color.jpg"/>
            </div>
        </div>
        <projectsSection_1["default"] />
        <div className="parallax-container">
            <div className="parallax">
                <img src="../../assets/bubbles.jpg"/>
            </div>
        </div>
        <aboutSection_1["default"] />
        <contactSection_1["default"] colorBar="blue-bar" colorBarLinkIn="blue-barLinkedIn pinkbar" colorBg="transparent" colorIcon="material-icons textWhite" colorIconLinkIn="fab fa-2x fa-linkedin textWhite" colorIconGithub="fab fa-2x fa-github-square textWhite" colorFooter="row colorFooter"/>
    </div>);
};
exports["default"] = App;
