import React from 'react'
import NavBar from './Navbar/NavBar'
import FadeIn from 'react-fade-in'

function Home() {
    return (
        <div>
      <NavBar />
      <div className="container-fluid p-0">
      <section className="resume-section" id="about">
     
                <div className="resume-section-content">
                <FadeIn >
                    <h2 className="mb-0">
                        Madhurima 
                        <span className="text-primary"> Gade</span>
                    </h2>
                 </FadeIn>
                <FadeIn delay="100">
                    <div className="subheading mb-5">
                        (352) 477-1366 ·
                        <a href="mailto:madhuui108@gmail.com"> madhuui108@gmail.com</a>
                    </div>
                    </FadeIn>
                    <FadeIn delay="150">
                    <p className="lead mb-5">
                    Currently, I am a Angular developer
                    My specialties includes in building rich prototypes and applications using HTML, CSS, JavaScript, Typescript, Angular JS, Angular 2,4,6,7,8,10 C#, SQL.
                    Excellent communication skills, interpersonal, hardworking and a very good team player and ability to effectively communicate with all levels of the organization such as technical, management and customers.
                    Highly motivated, strong analytical skills and ability to deliver in fast paced, high stress environment.
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="http://linkedin.com/in/madhu-rima-g-921302136" rel="noopener noreferrer" target="_blank"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
                    </div>
                    </FadeIn>
                </div>
            </section>
        </div>
        </div>

    )
}

export default Home
