"use strict";
exports.__esModule = true;
var react_1 = require("react");
var projectCard_1 = require("../components/projectCard");
var projectsHook_1 = require("../hooks/projectsHook");
require("./projectsSection.scss");
// HOOKS pour ce composant uniquement
// import PROJECTS from '../models/dbProjects';
// import Project from '../models/project';
// const ProjectsSection: FunctionComponent = () => {
//  const [projects, setProjects] = useState<Project[]>([]);
//  useEffect(()=> {
//     setProjects(PROJECTS);
//  }, []);
//HOOKS personalisé factorisé:
var ProjectsSection = function () {
    var projects = projectsHook_1["default"]();
    return (<div>
        <h2 className="title-section" id="projects-nav">Projects</h2>
        <div className="row projects-row">
            {projects.map(function (project) { return (<projectCard_1["default"] key={project.id} project={project}/>); })}
        </div>
    </div>);
};
exports["default"] = ProjectsSection;
