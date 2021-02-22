"use strict";
exports.__esModule = true;
var react_1 = require("react");
var materialize_css_1 = require("materialize-css");
require("./navbarSection.scss");
var react_router_hash_link_1 = require("react-router-hash-link");
var NavbarSection = function () {
    react_1.useEffect(function () {
        var navbar = document.querySelectorAll('.sidenav');
        materialize_css_1["default"].Sidenav.init(navbar, {});
    }, []);
    return (<div>
        <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
                <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <div className="nav-content center">
                    <ul className="hide-on-med-and-down">
                        <li>
                        <react_router_hash_link_1.HashLink smooth to="/projectsSection#projects-nav" className="menu-link">PROJECTS</react_router_hash_link_1.HashLink>
                        </li>
                        <li><react_router_hash_link_1.HashLink smooth to="/aboutSection#about-nav" className="menu-link">ABOUT</react_router_hash_link_1.HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-nav">
            <li><a href="sass.html">PROJECTS</a></li>
            <li><a href="badges.html">ABOUT</a></li>
        </ul>
    </div>);
};
exports["default"] = NavbarSection;
