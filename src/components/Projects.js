import React from 'react'
import NavBar from './Navbar/NavBar'
import FadeIn from 'react-fade-in'


function Projects() {
    return (
        <div>
            <NavBar />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <FadeIn>
                    <h3 className="mb-3">project</h3>
                    </FadeIn>
                    <FadeIn delay="100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Online Shopping Website</h5>
                            <div className="mb-3">Full Stack MERN website</div>
                            <p></p>
                        </div>
                        <div className="flex-shrink-0">Technologies used:<span className="text-primary">ReactJs, NodeJs and MongoDB</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Event Manager</h5>
                            <div className="mb-3">NodeJs Application</div>
                            <p></p>
                        </div>
                        <div className="flex-shrink-0">Technologies used:<span className="text-primary">NodeJS, MongoDB</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Online Burger Application</h5>
                            <div className="mb-3">ReactJs Application</div>
                            <p></p>
                        </div>
                        <div className="flex-shrink-0">Technologies used:<span className="text-primary">ReactJS, MongoDB</span></div>
                    </div>
                    </FadeIn>
                </div>
            </section>       
        </div>
    )
}

export default Projects
