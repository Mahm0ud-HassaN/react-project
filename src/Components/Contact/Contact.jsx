import React from 'react';
import style from './Contact.module.css'

export default function Contact() {
  return (
    <>
    
    
    <div style={{backgroundColor:"#f7f7f8"}}>
        <div className="row p-5 justify-content-center rounded-3 shadow-lg" style={{backgroundColor:"#fff"}}>
            <div className="col-md-9   " >
                <form onSubmit="">
                    <div className="row">
                        <div className="col-md-6">
                            <label for="fName" className="pb-2 fw-bolder">First name </label>
                            <input type="text" name="fName" className={` py-3 form-control ${style.contInput}`} id="fName" placeholder="Enter your first name"/>
                        </div> 
                        <div className="col-md-6">
                            <label for="lName" className="pb-2 fw-bolder">last name </label>
                            <input type="text" name="lName" className={` py-3 form-control ${style.contInput}`} id="lName" placeholder="Enter your last name"/>
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="pb-2 fw-bolder">Email </label>
                            <input type="email" name="email" className={` py-3 form-control ${style.contInput}`} id="email" placeholder="Enter your email"/>
                        </div> 
                        <div className="col-md-6">
                            <label for="phone" className="pb-2 fw-bolder">Phone </label>
                            <input type="tel" name="phone" className={` py-3 form-control ${style.contInput}`} id="phone" placeholder="Enter your last phone"/>
                        </div> 
                        <div className="col-12">
                            <label for="phone" className="pb-2 fw-bolder">subject </label>
    
                            <input type="text" name="subject" className={` py-3 form-control ${style.contInput}`} id="subject" placeholder="Enter your last subject"/>
    
    
                        </div>
                        <div className="col-12 my-3">
                            <label for="message" className="pb-2 fw-bolder">Message </label>
                            <textarea name="message" id="message" placeholder="enter your message here..." className="form-control py-3 " />
    
    
    
                        </div>
                        <button className="btn py-3 text-white w-50 mb-md-3 mx-auto my-3" style={{backgroundColor:"#ff9500"}}>Send Your Message</button>


                    </div>
                    
                                        
                    
                    </form>
            </div>
            <div className="col-md-3 ">
                <div className={`${style.contact}  py-3 border border-1 rounded-3 shadow-sm  text-center`}>
                 
                   <i className="fa-regular fa-envelope p-3 rounded-3 fs-3 " ></i>
                    <p>Support @ example.com</p>
                </div>
                <div className={` ${style.contact} my-5 py-3 border border-1 rounded-3 shadow-sm  text-center`}>
                   
                    <i className={`fa-solid fa-phone p-3 rounded-3 fs-3 ` }></i>
                     <p> 1234567890</p>
                 </div>
                 <div className={` ${style.contact}  mb-5 py-3 border border-1 rounded-3 shadow-sm  text-center`}>
                 
                    <i className="fa-solid fa-location-dot p-3 rounded-3 fs-3 " ></i>
                     <p>some where in the world</p>
                 </div>
                 <div className={`${style.contact} py-3 border border-1 rounded-3 shadow-sm  text-center`}>
                    <i className="fa-brands fa-facebook p-3 rounded-3 fs-3 " ></i>
                    <i className="fa-brands fa-twitter p-3 rounded-3 fs-3 " ></i>
                    <i className="fa-brands fa-linkedin p-3 rounded-3 fs-3 " ></i>
                     <p>social media link</p>
                 </div>
                
            </div>
           
        </div>
    </div>
    </>
  )
}
