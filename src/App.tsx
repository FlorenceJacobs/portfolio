import React, { FunctionComponent, useEffect } from 'react';
import HeaderSection from './sections/headerSection';
import ContactSection from './sections/contactSection';
import NavbarSection from './sections/navbarSection';
import ProjectsSection from './sections/projectsSection';
import AboutSection from './sections/aboutSection';
import './App.scss';
import M from 'materialize-css';
  
const App: FunctionComponent = () => {

    useEffect(() => {
        var paral = document.querySelectorAll('.parallax');
        M.Parallax.init(paral, {});
      }, []);
 
 return (
    <div>
        <NavbarSection />
        <HeaderSection />
        <ContactSection />
        <div className="parallax-container">
            <div className="parallax">
                <img src="../../assets/bubble_color.jpg" />
            </div>
        </div>
        <ProjectsSection />
        <div className="parallax-container">
            <div className="parallax">
                <img src="../../assets/bubbles.jpg" />
            </div>
        </div>
        <AboutSection />
    </div>
 )
}
  
export default App;