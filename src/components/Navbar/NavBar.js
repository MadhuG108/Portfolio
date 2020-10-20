import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import "./NavBar.css"
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand " to={process.env.PUBLIC_URL+"/"}>
                <span className="d-block d-lg-none">Madhurima Gade</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" /></span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className=" navbar-nav  ">    
                        <li className="nav-item "><Link to={process.env.PUBLIC_URL+"/"} className="nav-link" >About</Link></li>
                        <li className="nav-item "><Link to={process.env.PUBLIC_URL+"/experience"}className="nav-link" >Experience</Link></li>
                        <li className="nav-item  "><Link to={process.env.PUBLIC_URL+"/education"} className="nav-link">Education</Link></li>
                        <li className="nav-item "><Link to={process.env.PUBLIC_URL+"/skills"} className="nav-link" >Skills</Link></li>
                        <li className="nav-item "><Link to={process.env.PUBLIC_URL+"/projects"} className="nav-link" >Projects</Link></li>
                        <li className="nav-item  "><Link to={process.env.PUBLIC_URL+"/interest"} className="nav-link" >Interest</Link></li>
                    </ul>
            </div>
    </nav>
    )
}

export default withRouter(NavBar)

