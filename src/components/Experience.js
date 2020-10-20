import React from 'react'
import NavBar from './Navbar/NavBar'
import FadeIn from 'react-fade-in'


function Experience() {
    return (
        <div>
            <NavBar />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <FadeIn>
                    <h3 className="mb-5">Experience</h3>
                    </FadeIn>
                    <FadeIn delay="100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">

                        <div className="flex-grow-1">
                            <h5 className="mb-0">Angular Developer</h5>
                            <p>Universal Orlando Resort</p>
                    <div class="subheading mb-3">Description</div>
                            <ul class="fa-ul mb-0">
                        <li className="mb-2">
                        - Coordinated with the Business Analysts and conducted feedback sessions with the Associates 
                          to understand the requirements of the user interface layout of the web application.
                        </li>
                        <li className="mb-2">
                        - Involved in supporting the current & develop the new version of UniversalOrlando.com 
                          Ticketing & Commerce Site (ICE) using SDL Tridion CMS, Angular frontend framework & Node server.
                        </li>
                        <li className="mb-2">
                        - Developed cross browser and multi browser compatible web pages using HTML5, CSS, Typescript Foundation.
                        </li>
                        <li className="mb-2">
                        - Involved in the development of the entire Front-end part of the system, using Angular framework 
                          (which means Typescript, HTML5, and Foundation), JSON.
                        </li>
                        <li className="mb-2">
                        - Utilized version control tool GIT to communicate with other team members in order to work on the same code-base in the repository.
                        </li>
                        <li className="mb-2">
                        - Make Asynchronous calls to submit form to map HTTP request data with a model usingmodel binder, get data, parses the response, and displays the results on the screen.
                        </li>
                        <li className="mb-2">
                        - Co-ordinated with QA for testing, Production releases, Application deployment and integration.
                          Implemented Jasmine framework and karma server to write and test the unit test cases for UI code.
                        </li>
                        <li className="mb-2">
                        - Implemented Unit Testing, Integration Testing and System Testing using NUNIT.
                          Used Rally and JIRA for task assignment, bug/defect tracking and fixture.
                        </li>
                    </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2019 - Till date</span></div>
                    </div>
                    </FadeIn>
                    <FadeIn delay="100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                       
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Front end Developer</h5>
                            <p>Ardent Mills</p>
                    </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2018 - May 2019</span></div>
                    </div>
                    </FadeIn>
                    <FadeIn delay="100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                       
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Web Developer</h5>
                            <p>Value Labs</p>
                    </div>
                        <div className="flex-shrink-0"><span className="text-primary">July 2016 - June 2018</span></div>
                    </div>
                    </FadeIn>
                    <FadeIn delay="100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                       
                        <div className="flex-grow-1">
                            <h5 className="mb-0">Software Developer</h5>
                            <p>Maruti</p>
                    </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2015 - June 2016</span></div>
                    </div>
                    </FadeIn>
        </div>
        </section>
        </div>
    )
}

export default Experience