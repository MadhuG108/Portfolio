import React from 'react'
import NavBar from './Navbar/NavBar'
import FadeIn from 'react-fade-in'


function Interest() {
    
    return (
        <div>
            <NavBar />
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                <FadeIn>   <h3 className="mb-5">Interests</h3> </FadeIn>
            <FadeIn delay="200">               
                    <p>When I’m not on the job, I love to travel and indulge my love for seeing new places.
                         Being in the city of joy had an opportunity to experience kayaking, cycling, and Hiking. 
                         This culture has made me expose to new things and fond of learning new technologies has always kept me unique from others </p>
            </FadeIn>
                    <p className="mb-0"></p>
                </div>
            </section>
            <hr className="m-3" />
        </div>
    )
}

export default Interest
