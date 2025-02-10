import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLang, toggleTheme, logout } from '../Store/Store'; // Import logout action
import egy from './egypt.png';
import eng from './england.png';
import moon from './moon.png';
import sun from './sun.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const { content, lang } = useSelector((state) => state.lang);
  const { isAdmin, user } = useSelector((state) => state.auth); // Get auth state

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLogout = () => {
    dispatch(logout()); 
  navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-3">
          <Link className="navbar-brand" to="/home">
            <i className="fa-solid fa-graduation-cap fs-1" style={{ color: '#ff9500' }}></i>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link className="nav-link" aria-current="page" to="/home">
                  {content.home}
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* Show Admin link only if the user is an admin */}
              
            </ul>

            {/* Language and Theme Toggle Buttons */}
            {isAdmin && (
               
               <button className="btn btn-outline-warning py-2 ">
             <Link className="nav-link" to="/admin">
               Admin <i className="fa-solid fa-crown"></i>
             </Link></button>
          
         )}
            <button className="btn btn-lang mx-2 btn-outline-warning" onClick={() => dispatch(toggleLang())}>
              {lang === 'ar' ? (
                <img src={egy} alt="Egypt Flag" width={30} height={30} />
              ) : (
                <img src={eng} alt="UK Flag" width={30} height={30} />
              )}
            </button>
            <button className="btn btn-theme mx-2 btn-outline-warning" onClick={() => dispatch(toggleTheme())}>
              {theme === 'light' ? (
                <img src={moon} alt="Sun Icon" width={30} height={30} />
              ) : (
                <img src={sun} alt="Moon Icon" width={30} height={30} />
              )}
            </button>

            {user ? (
              <>
                <button className="btn mx-2 px-3 text-light" style={{ backgroundColor: '#ff9500' }}>
                  <Link className="nav-link text-info" to="/profile">
                    <i className="fa-solid fa-user"></i> 
                  </Link>
                </button>
                <button
                  className="btn mx-2 px-3"
                  style={{ border: '1px solid #ff9500' }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn mx-2 px-3" style={{ border: '1px solid #ff9500' }}>
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </button>
                <button className="btn mx-2 px-3 text-light" style={{ backgroundColor: '#ff9500' }}>
                  <Link className="nav-link text-info" to="/login">
                    Login
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}