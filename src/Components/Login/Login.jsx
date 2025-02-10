import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from './search.png';
import Joi from 'joi';
import Swal from 'sweetalert2';

import { auth, provider } from '../../FireBase/firebaseConfig.js';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate form inputs
    const validationResult = validation();
    if (validationResult.error) {
      setError(validationResult.error.details[0].message);
      setIsLoading(false);
      return;
    }

    try {
      // Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("User signed in:", userCredential.user);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have logged in successfully!',
        timer: 1500,
      });

      navigate('/home'); // Redirect to home after successful login
    } catch (error) {
      console.error("Error signing in:", error);
      let errorMessage = 'An error occurred while logging in.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      }
      setError(errorMessage);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      });
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Welcome, ${result.user.displayName}! ✅`,
      });

      navigate('/home'); // Redirect to home after successful login
    } catch (error) {
      console.error("Error signing in with Google:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong with Google login. ❌',
      });
    }
  };

  const validation = () => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
      password: Joi.string().min(6).required(), // Minimum 6 characters
    });
    return schema.validate(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div style={{ backgroundColor: '#f7f7f8' }} className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5 p-5 rounded-3 shadow-lg" style={{ backgroundColor: '#fff' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Log in</h2>
            <h5 className="text-center text-secondary">Welcome back!</h5>

            <div>
              <label htmlFor="email" className="pb-2 fw-bolder">Email</label>
              <input
                type="email"
                name="email"
                className="py-3 form-control bg-light"
                id="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="py-3">
              <label htmlFor="password" className="pb-2 fw-bolder">Password</label>
              <div className="input-group">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  className="py-3 form-control bg-light"
                  id="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="input-group-text"
                  style={{ cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                >
                  <i className={`fas ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePasswordIcon"></i>
                </span>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger">
                {error.includes('password')
                  ? '⚠️ The email or password is incorrect. Please try again.'
                  : error.includes('email')
                  ? '⚠️ The email is invalid. Please enter a valid email like: example@mail.com'
                  : '⚠️ The email or password is incorrect. Please try again.'}
              </div>
            )}

            <p className="text-end">
              <Link to="#" className="text-secondary">Forgot Password?</Link>
            </p>

            <div className="form-check py-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>

            <button
              className="btn form-control py-3"
              style={{ backgroundColor: '#ff9500', color: '#fff' }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <i className="fa fa-spinner fa-spin"></i> : 'Login'}
            </button>

            <div className="d-flex fs-5 py-3">
              <hr className="flex-grow-1" />
              <span className="px-2">or</span>
              <hr className="flex-grow-1" />
            </div>

            <button
              className="btn form-control py-3"
              style={{ backgroundColor: '#f7f7f8' }}
              type="button"
              onClick={handleGoogleLogin}
            >
              <img src={img} width="30" height="30" alt="Google Logo" className="me-2" />
              Login With Google
            </button>

            <p className="text-center mt-3">
              Don't have an account?{' '}
              <Link to="/signup" className="text-dark fw-bold">Sign up</Link>{' '}
              <i className="ms-2 fa-solid fa-arrow-up-right-from-square"></i>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}