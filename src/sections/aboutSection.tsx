import React, { FunctionComponent } from 'react';
import './aboutSection.scss';

const AboutSection : FunctionComponent = () => {
    return (
        <div>
            <div>
            <h2 className="title-section" id="about-nav">About me (●'◡'●)</h2>
            </div>
            <div className="container">
                <div>
                    <h3>I'm...</h3>
                    <div className="cv-text">
                        After 10 years as communication manager in the cultural sector, I wished to boost my career. BeCode gave me the opportunity to learn as fast as possible during 7 months. Only 7 months, that's why these projects aren't perfect! Can you see how to correct them? Then let me take advantage of your experience and welcome me as your trainee!
                    </div>
                    <h3 className="pink-circle">Work experience</h3>
                    <h4 className="cv-subtitle">2010-2020</h4>
                    <div className="cv-text">
                    Communication manager at the Cultural Center of Walloon Brabant. Press relations, media partnerships, community management (editorial staff, Facebook business manager, Google Analytics, Google Ad Words), web editing, project management.
                    </div>
                    <h4 className="cv-subtitle">2010</h4>
                    <div className="cv-text">
                    Press agent of the Jyva'Zik Festival, Nil-Saint-Vincent. Strategic communication plan, press relations.
                    </div>
                    <h4 className="cv-subtitle">2008-2009</h4>
                    <div className="cv-text">
                    Project Manager at the Brussels Kunstenoverleg, Brussels. Implementation of a collaboration agreement between Dutch- and French-speaking cultural institutions in Brussels.
                    </div>
                    <h3 className="place-cv pink-circle">Education</h3>
                </div>
                <div className="row">
                    <div className="col s3 m2 l2">
                    <h4 className="cv-date">2020-2021</h4>
                    </div>
                    <div className="col s3 m2 l2 cv-text">
                    <i className="material-icons">location_on</i>Becode
                    </div>
                    <div className="col s6 m8 l8 cv-text">
                        Junior Web Developer
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 m2 l2">
                    <h4 className="cv-date">2007-2009</h4>
                    </div>
                    <div className="col s3 m2 l2 cv-text">
                    <i className="material-icons">location_on</i>ULB
                    </div>
                    <div className="col s6 m8 l8 cv-text">
                        Master's degree in Performing Arts, with a European focus on the performing arts.
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 m2 l2">
                    <h4 className="cv-date">2008-2009</h4>
                    </div>
                    <div className="col s3 m2 l2 cv-text">
                    <i className="material-icons">location_on</i>VUB
                    </div>
                    <div className="col s6 m8 l8 cv-text">
                        Erasmus: "Het theater in Vlaanderen" (Theater in Flanders)
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 m2 l2">
                    <h4 className="cv-date">2004-2007</h4>
                    </div>
                    <div className="col s3 m2 l2 cv-text">
                    <i className="material-icons">location_on</i>UCL
                    </div>
                    <div className="col s6 m8 l8 cv-text">
                        Bachelor's degree in Communication and Media Studies.
                    </div>
                </div>
                <div>
                    <h3 className="place-cv pink-circle">Skills</h3>
                    <div className="row">
                        <div className="col s12 m6">
                            <h4 className="cv-skill">Soft skills</h4>
                            <div className="col s6 cv-text flex-skill">
                                <div><i className="material-icons">check</i>Empathy</div>
                                <div><i className="material-icons">check</i> Creativity</div>
                                <div><i className="material-icons">check</i> Patience</div>
                                <div><i className="material-icons">check</i> Open-mindedness</div>
                            </div>
                            <div className="col s6 cv-text flex-skill">
                                <div><i className="material-icons">check</i>Analytical skills</div>
                                <div><i className="material-icons">check</i> Communication</div>
                                <div><i className="material-icons">check</i> Adaptability</div>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <h4 className="cv-skill">What I've learned</h4>
                            <div className="cv-text">As you can see in this Portfolio, I'm confortable with <strong>React, VueJS, Laravel, Git, Bootstrap, Adobe Suite</strong>. I'm still learning, so I hope to expand this list in a few months! Just have a look at my projects here above.</div>
                            <p className="cv-text">I have a car and my driving licence. French is my mother tongue but I can answer you in <strong>English, Spanish or Dutch</strong>.</p>
                        </div>
                        <div className="col end-section">
                            <h4 className="cv-skill">Hobbies</h4>
                            <div className="cv-text">I don't see time passing when I'm gardening. And I constantly have projects to create objects or furniture in the corner of my head, like a lamp in an old trumpet or a coat hook made out of neglected toys.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;