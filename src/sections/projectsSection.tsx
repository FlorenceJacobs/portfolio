import React, { FunctionComponent, useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import useProjects from '../hooks/projectsHook';
import './projectsSection.scss';
  
// HOOKS pour ce composant uniquement
// import PROJECTS from '../models/dbProjects';
// import Project from '../models/project';
// const ProjectsSection: FunctionComponent = () => {
//  const [projects, setProjects] = useState<Project[]>([]);
//  useEffect(()=> {
//     setProjects(PROJECTS);
//  }, []);

//HOOKS personalisé factorisé:
const ProjectsSection : FunctionComponent = () => {
    const projects = useProjects();
    
 return (
    <div>
        <h2 className="title-section" id="projects-nav">Projets</h2>
        <div className="row projects-row">
            {projects.map(project => (
            <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    </div>
  
 )
}
  
export default ProjectsSection;