import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-3">
            <Link className="navbar-brand " to="/home">
              

                <i className="fa-solid fa-graduation-cap fs-1" style={{color:"#ff9500"}}></i></Link>

            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars-staggered"></i> </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>

                <button className="btn  mx-2 px-3" style={{border:"1px solid #ff9500 "}}>
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </button>
                <button className="btn  mx-2 px-3 text-light" style={{backgroundColor:"#ff9500"}}>
                    <Link className="nav-link text-info" to="/login">Login</Link>
                </button>
            </div>
        </div>
    </nav>
    </>
  )
}
