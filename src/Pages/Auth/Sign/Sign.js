import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Sign.css";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";


const Sign = () => {
  const [checkPass, setCheckPass] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [
    createUserWithEmailAndPassword,
    regiUser,
    regiLoading,
    regiError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [
    signInWithEmailAndPassword,
    loginUser,
    loginLoading,
    loginError,
  ] = useSignInWithEmailAndPassword(auth);

  const signUpName = (event) => {
    setDisplayName(event.target.value);
  };
  const photo = (event) => {
    setPhotoURL(event.target.value);
  };
  const signUpEmail = (event) => {
    setEmail(event.target.value);
  };
  const signUpPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  

  const handleLogin = async(event)=>{
    event.preventDefault();
    await signInWithEmailAndPassword(email, password)
    event.target.reset()

  }


  const handleRegistration = async(event) => {
    event.preventDefault();
   

    if (password !== confirmPassword) {
      setCheckPass(true);
      return
    } else {
      setCheckPass(false);
    }
    
    await createUserWithEmailAndPassword(email , password)
    await updateProfile({displayName , photoURL})
    event.target.reset()
    setCheckPass(false);
}

  return (
    <div className="login-section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <label className="span" htmlFor="reg-log">
                  Log In{" "}
                </label>
                <label htmlFor="reg-log" className="span">
                  Sign Up
                </label>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>

              <div className="login-card-3d-wrap mx-auto">
                <div className="login-card-3d-wrapper">
                  <div className="login-card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3 text-bold login-gradient">
                          Log In
                        </h4>
                        <form onSubmit={handleLogin}>
                        <div className="form-group mb-5">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            onBlur={signUpEmail}
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group ">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            onBlur={signUpPassword}
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button type="submit" className="login-btn mt-4">
                            {
                                loginLoading ?  <svg className="animate-spin h-5 w-5  bg-transparent border-x-4 rounded-xl  border-sky-600 ..."> </svg> :   "Login"
                            }
                           
                          </button>
                        </form>
                        <p className="mb-0 forgot-text mt-4 text-center">
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                      <div>
                      <button className="google-btn  mt-4">
                      <FontAwesomeIcon className="mr-2 icon" icon={faGoogle} />  Google
                          </button>
                          <button className="facebook-btn mt-4 ml-5">
                          <FontAwesomeIcon className="mr-2 icon" icon={faFacebookF} />  Facebook
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="login-card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3 login-gradient">Sign Up</h4>

                        <form onSubmit={handleRegistration}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              onBlur={signUpName}
                              className="form-style"
                              placeholder="Your Name"
                              id="signname"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <div className="form-group mt-2 py-2">
                            <input
                              type="email"
                              name="email"
                              onBlur={signUpEmail}
                              className="form-style "
                              placeholder="Your Email"
                              id="signemail"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2 py-2">
                            <input
                              type="text"
                              name="photo"
                              onBlur={photo}
                              className="form-style "
                              placeholder="Your Photo"
                              id="signemail"
                            
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              onBlur={signUpPassword}
                              className="form-style"
                              placeholder="Your Password"
                              id="signpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="confirmPassword"
                              onBlur={signUpConfirmPassword}
                              className="form-style"
                              placeholder="Confirm Password"
                              id="signConpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          {checkPass ? <h6 className="text-red-600">Your Password didn't Matched</h6> : " "}
                        
                          <button type="submit" className="login-btn mt-4">
                            {
                                updating || regiLoading ||  loginLoading ?  <svg className="animate-spin h-5 w-5 mr-3 bg-transparent border-x-4 rounded-xl  border-orange-600 ..."> </svg> :   "Register"
                            }
                           
                          </button>
                        </form>
                      </div>
                      <div>
                      <button className="google-btn  mt-4">
                      <FontAwesomeIcon className="mr-2 icon" icon={faGoogle} />  Google
                          </button>
                          <button className="facebook-btn mt-4 ml-5">
                          <FontAwesomeIcon className="mr-2 icon" icon={faFacebookF} />  Facebook
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
