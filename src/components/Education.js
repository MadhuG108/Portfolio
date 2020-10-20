import React from 'react'
import NavBar from './Navbar/NavBar'
import FadeIn from 'react-fade-in'


function Education() {
    return (
        <div>
            <NavBar />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <FadeIn>
                    <h3 className="mb-5">Education</h3>
                    </FadeIn>
                    <FadeIn delay="100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Lamar University</h5>
                            <div className="mb-3">Master Of Engineering</div>
                            <div>Electrical Engineering</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2018 - May 2020 </span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Kakatiya Institute of Technology and Science</h5>
                            <div className="mb-3">Bachelor of Engineering</div>
                            <div>Electronics and Communications Engineering</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2014 - May 2018</span></div>
                    </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}

export default Education
