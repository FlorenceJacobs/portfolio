import React, { FunctionComponent, useState } from 'react';
import Project from '../models/project';
import './projectCard.scss';
import formatType from '../helpers/formatType';

type Props = {
    project : Project,
    borderColor?:string,
};

const ProjectCard: FunctionComponent<Props> = ({project, borderColor="#dfdfdf"}) => {
    
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor("#dfdfdf");
    }
    
    return (
        <div>
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
                                {project.techno.map(tech =>(
                                    <div key={tech} className={formatType(tech)} id="pillule">{tech}</div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;