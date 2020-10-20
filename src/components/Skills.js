import React from 'react'
import NavBar from './Navbar/NavBar'
import ScratchCard from 'react-scratchcard';
import FadeIn from 'react-fade-in'
import { HashRouter } from 'react-router-dom';

 
const settings = {
  width: 100,
  height: 100,
  image: './dev-orangeM.png',
  finishPercent: 70,
  onComplete: () => console.log('The card is now clear!')
};

function Skills() {
    return (
        <div>
            <NavBar />
            <section className="resume-section" id="skills">
                <div className="resume-section-content" style={{display:"block"}}>
                    <FadeIn>
              <h3 className="mb-5" style={{display:"block"}}>Skills</h3>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                    <ion-icon style={{fontSize:"100px"}} name="logo-html5"></ion-icon>
                         </li>
                         <li className="list-inline-item">
                    <ion-icon style={{fontSize:"100px"}} name="logo-css3"></ion-icon>
                         </li>
                         <li className="list-inline-item">
                    <ion-icon style={{fontSize:"100px"}} name="logo-javascript"></ion-icon>
                         </li>
                         <li className="list-inline-item">
                    <ion-icon style={{fontSize:"100px"}} name="logo-Angular"></ion-icon>
                         </li>
                         <li className="list-inline-item">
                    <ion-icon style={{fontSize:"100px"}} name="logo-react"></ion-icon>
                         </li>    
                         <li className="list-inline-item">
                    <ion-icon style={{fontSize:"100px"}} name="logo-github"></ion-icon>
                         </li>
                         </ul>
                        </FadeIn>
                </div>
                <FadeIn delay="200">
                <div style={{display:"block"}}> 
                <div className="subheading list-block mb-3 mt-5">Core Competencies</div>
                  <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><ion-icon name="checkmark-sharp"></ion-icon></span>
                        Linux OS & Windows OS
                    </li>
                    <li>
                        <span className="fa-li"><ion-icon name="checkmark-sharp"></ion-icon></span>
                        SQL
                    </li>
                    <li>
                        <span className="fa-li"><ion-icon name="checkmark-sharp"></ion-icon></span>
                        React-Redux
                    </li>
                    <li>
                        <span className="fa-li"><ion-icon name="checkmark-sharp"></ion-icon></span>
                        Agile Development & Scrum
                    </li>
                </ul>
                </div></FadeIn>
            </section>
        </div>
    )
}

export default Skills
