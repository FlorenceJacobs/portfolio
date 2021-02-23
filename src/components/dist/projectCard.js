"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./projectCard.scss");
var formatType_1 = require("../helpers/formatType");
var ProjectCard = function (_a) {
    var project = _a.project, _b = _a.borderColor, borderColor = _b === void 0 ? "#dfdfdf" : _b;
    var _c = react_1.useState(), color = _c[0], setColor = _c[1];
    var showBorder = function () {
        setColor(borderColor);
    };
    var hideBorder = function () {
        setColor("#dfdfdf");
    };
    return (<div>
            <div className="col s6 m3 l2 card-col" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                <a href={project.link} target="_blank">
                    <div className="card z-depth-0 hoverMe" style={{ borderColor: color }}>
                        <div className="card-image z-depth-0">
                            <img src={project.picture} alt={project.name}/>
                        </div>
                        <div className="hidded">
                            <div className="card-container">
                                <div>{project.name}</div>
                                <div className="date-space"><small>{project.created}</small></div>
                                <div>
                                {project.techno.map(function (tech) { return (<div key={tech} className={formatType_1["default"](tech)} id="pillule">{tech}</div>); })}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>);
};
exports["default"] = ProjectCard;
