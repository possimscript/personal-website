import React, { Component } from 'react'
import codebase from "./../images/Codebase.png"
import advisory from "./../images/Advisory.png"
import sana from "./../images/SANA.png"

export default class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <h2 id="projects-heading">EXPERIENCE</h2>
                <div id="projects-div">
                    <div className="projects-container" id="pc-1">
                        <img className="projects-img" src={codebase} alt="CodeBase"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">CODEBASE</h3>
                            <p><strong>Mentored Developer</strong>
                            <br/><br/>Collaborative project with the Berkeley Project,
                            developing the full-stack environment for their new website. 
                            Implementing front-end responsive web design and back-end database processing 
                            using React, Node.js and PostgreSQL.  </p>
                        </div>
                    </div>
                    <div className="projects-container" id="pc-2">
                        <img className="projects-img" src={advisory} alt="Advisory"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">ADVISORY SINGAPORE</h3>
                            <p><strong>Educators Roundtable Manager</strong>
                            <br/><br/>Managed the organisation's flagship educator event, 
                            coordinating with schools and government bodies to organise
                            a large-scale event with more than 400 participants. Created 
                            and developed data processing protocols and infrastructure
                            to increase efficiency of logistics and information flow.</p>
                        </div>
                    </div>
                    <div className="projects-container" id="pc-3">
                        <img className="projects-img" src={sana} alt="SANA"/>
                        <div className="projects-text-container">
                            <h3 className="projects-title">SANA</h3>
                            <p><strong>Media Intern</strong>
                            <br/><br/>Developed a complete curriculum in narcotics awareness
                            and education for high-school students, including the development
                            of interactive materials and multi-media. Managed social media 
                            and outreach materials for the entire organisation.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
