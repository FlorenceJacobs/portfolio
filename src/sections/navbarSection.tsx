import React, { FunctionComponent, useEffect } from 'react';
import M from 'materialize-css';
import './navbarSection.scss';
import { HashLink } from 'react-router-hash-link';
  
const NavbarSection : FunctionComponent = () => {

    useEffect(() => {
        var navbar = document.querySelectorAll('.sidenav');
        M.Sidenav.init(navbar, {});
      }, []);
    
 return (
    <div>
        <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
                <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <div className="nav-content center">
                    <ul className="hide-on-med-and-down">
                        <li>
                        <HashLink smooth to="/projectsSection#projects-nav" className="menu-link">PROJECTS</HashLink>
                        </li>
                        <li><HashLink smooth to="/aboutSection#about-nav" className="menu-link">ABOUT</HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-nav">
            <li><a href="sass.html">PROJECTS</a></li>
            <li><a href="badges.html">ABOUT</a></li>
        </ul>
    </div>
 )
}
  
export default NavbarSection;