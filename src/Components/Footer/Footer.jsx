import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer class="p-3 bg-light mt-3">
        <div class="container-fluid">
            <div class="row text-lg-start">
                <div class="col-6 col-lg-4 mb-3">
                    <Link class="navbar-brand d-block " to="/home">
                        <i class="fa-solid fa-graduation-cap  fs-2" style={{color:"#ff9500"}}></i>
                    </Link>
                    <p><i class="fa-solid fa-envelope p-1 rounded-3 fs-5"></i> Support@example.com</p>
                    <p><i class="fa-solid fa-phone p-1 rounded-3 fs-5"></i> 1234567890</p>
                    <p><i class="fa-solid fa-location-dot p-1 rounded-3 fs-5"></i> Somewhere in the world</p>
                </div>
    
                <div class="col-6 col-lg-3 mb-3">
                    <h5>Home</h5>
                    <ul class="list-unstyled">
                        <li><Link to="/benefits" class="text-decoration-none text-dark">Benefits</Link></li>
                        <li><Link to="/courses" class="text-decoration-none text-dark">Our Courses</Link></li>
                        <li><Link to="/testimonials" class="text-decoration-none text-dark">Testimonials</Link></li>
                        <li><Link to="/faq" class="text-decoration-none text-dark">FAQ</Link></li>
                    </ul>
                </div>
    
                <div class="col-6 col-lg-3 mb-3">
                    <h5>About Us</h5>
                    <ul class="list-unstyled">
                        <li><Link to="/company" class="text-decoration-none text-dark">Company</Link></li>
                        <li><Link to="/achievements" class="text-decoration-none text-dark">Achievements</Link></li>
                        <li><Link to="/goals" class="text-decoration-none text-dark">Our Goals</Link></li>
                        <li><Link to="/team" class="text-decoration-none text-dark">Our Team</Link></li>
                    </ul>
                </div>
    
              
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Social Profiles</h5>
                    <i class="fa-brands fa-facebook p-2 rounded-3 fs-3 bg-white"></i>
                    <i class="fa-brands fa-twitter p-2 rounded-3 fs-3 bg-white"></i>
                    <i class="fa-brands fa-linkedin p-2 rounded-3 fs-3 bg-white"></i>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
