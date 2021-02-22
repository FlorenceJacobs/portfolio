"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./headerSection.scss");
var HeaderSection = function () {
    // useEffect(() => {
    //     var cursor = document.querySelector("#header-section");
    //     GhostCursor.init(cursor, {element: targetElement});
    //   }, []);
    return (<div className="row header-row">
        <div className="headerBG">
            <div className="headerBubble">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="titleHeader container" id="header-section">
            <div className="row titleRow">
                <div className="col s12 m6 l4 center">
                    <img className="circle" src="../../assets/profil_FJa.png" alt="Florence Jacobs"></img>
                </div>
                <div className="col s12 m6 l8 white-text left">
                    <h1 className="titleName">Florence Jacobs</h1>
                    <p className="subtitle">FUTUR WEB DEVELOPER</p>
                </div>
                <div className="row header-presentation">
                    <div className="col s12 m12 l8 slide-container valign-wrapper">
                        <div className="slide-text white-text center-align"><span className="hello">Hi!</span> <br />For the past six months, my brain has been bubbling... <br />After 10 years as communicator in the cultural sector, I resigned and took the plunge in the ocean of code, joining BeCode's training. Today, I'm able to float, now it's time to swim as a trainee surrounded by a team.<br /><span className="strong">Will you give me that chance ?</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
exports["default"] = HeaderSection;
