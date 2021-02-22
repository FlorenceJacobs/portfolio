import React, {useState, useEffect} from 'react';
import Project from '../models/project';
import PROJECTS from '../models/dbProjects';

const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(PROJECTS);
    }, []);
    return projects;
}

export default useProjects;