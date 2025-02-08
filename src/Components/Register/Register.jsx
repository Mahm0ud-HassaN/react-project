import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import img from './search.png';
import Joi from "joi";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
import { auth, provider } from '../../FireBase/firebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [user, setUser] = useState({
    Full_Name: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You must agree to the terms and conditions.',
      });
      return;
    }

    setIsLoading(true);
    const validationResult = validation();
    if (!validationResult.error) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, user.Email, user.Password);
        await updateProfile(userCredential.user, { displayName: user.Full_Name });

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You registered successfully!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate('/login');
        });
      } catch (error) {
        // Handle Firebase errors
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('This email is already in use. Please use a different email.');
            break;
          case 'auth/weak-password':
            setError('Password should be at least 6 characters long.');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address. Please enter a valid email.');
            break;
          default:
            setError('An error occurred during registration. Please try again.');
        }
      }
    } else {
      // Handle validation errors
      setError(validationResult.error.details[0].message);
    }
    setIsLoading(false);
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Signed in successfully with Google!',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      setError('An error occurred during Google sign-in. Please try again.');
    }
  };

  const validation = () => {
    let schema = Joi.object({
      Full_Name: Joi.string().min(7).max(30).pattern(/^[a-zA-Z ]+$/).required(),
      Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      Password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
      Confirm_Password: Joi.string().valid(Joi.ref('Password')).required().messages({
        "any.only": "Passwords must be the same",
      }),
    });
    return schema.validate(user);
  };

  const handleChange = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Page</title>
      </Helmet>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white mt-5 p-5 rounded-3 shadow-lg">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center">Sign Up</h2>
              <h5 className="text-center text-secondary">Create New Account</h5>

              <div className="py-3">
                <label htmlFor="Full_Name" className="pb-2 fw-bolder">Full Name</label>
                <input type="text" name="Full_Name" className="py-3 form-control bg-light" id="Full_Name" placeholder="Enter your Full Name" onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="Email" className="pb-2 fw-bolder">Email</label>
                <input type="email" name="Email" className="py-3 form-control bg-light" id="Email" placeholder="Enter your email" onChange={handleChange} required />
              </div>

              <div className="py-3">
                <label htmlFor="Password" className="pb-2 fw-bolder">Password</label>
                <div className="input-group">
                  <input type={passwordVisible ? "text" : "password"} name="Password" className="py-3 form-control bg-light" id="Password" onChange={handleChange} placeholder="Enter your Password" required />
                  <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    <i className={`fas ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </span>
                </div>
              </div>

              <div className="py-3">
                <label htmlFor="Confirm_Password" className="pb-2 fw-bolder">Confirm Password</label>
                <div className="input-group">
                  <input type={passwordVisible ? "text" : "password"} name="Confirm_Password" className="py-3 form-control bg-light" id="Confirm_Password" onChange={handleChange} placeholder="Confirm your Password" required />
                  <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    <i className={`fas ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </span>
                </div>
              </div>

              {/* Display error message */}
              {error && (
                <div className="alert alert-danger">
                  {error.includes('Password') ? 'Invalid password (should contain at least 8 characters, at least one capital letter, and one symbol)' :
                   error.includes('Confirm_Password')? 'Passwords must be the same'
                    :error}
                </div>
              )}

              <div className="form-check py-2">
                <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate" onChange={(e) => setAgreed(e.target.checked)} />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                  I agree to the terms and conditions
                </label>
              </div>

              <button type="submit" className={`btn ${style.btnLog} form-control py-3`} disabled={isLoading}>
                {isLoading ? <i className="fa fa-spinner fa-spin"></i> : 'Sign Up'}
              </button>

              <button type="button" className={`btn ${style.btnSign} form-control py-3 mt-3`} onClick={signUpWithGoogle}>
                <img src={img} width="30" height="30" alt="Google Logo" className="me-2" />
                Sign Up With Google
              </button>

              <p className="text-center mt-3">
                Already have an account? <Link to="/login" className="text-dark fw-bold">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}