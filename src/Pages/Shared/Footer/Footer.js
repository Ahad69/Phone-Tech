import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram, faPinterest, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faGear } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-neutral-content">
        <div>
          <img className='m-auto gear' src="https://i.ibb.co/4f7Y5H3/favicon-Copy.png" alt="" />
          <br />
          <p className='footer-gradient'> Phone Tech Co. Ltd.</p>
          <h3 className='m-auto'>Copyright &copy; 2022</h3>
        </div> 
      <div className='footer-hr-line flex items-center'>
      <hr className='footer-hr1' />
        <hr className='footer-hr' />
        <hr className='footer-hr1' />
      </div>
      <div className='footer-vr-line'>
      <hr className='footer-vr1' />
        <hr className='footer-vr' />
        <hr className='footer-vr1' />
      </div>
        <div>
          <p className='text-red-600 text-2xl'>Problem Box</p>
          <div className='problem-box'>
          <input
            type="text"
            readOnly
            placeholder="Problem Box"
            className="input mt-1 mr-2 input-bordered input-error"
            name="email"
          />
            <input type="submit"  className='login-btn' value="Submit" />
          </div>
          <span className="footer-title">Social</span> 
          <div className="grid grid-flow-col gap-4">
          <div className="social-icons ">
          <div className="insta-bg  text-white">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          </div>
          <div className="fb-bg  text-white">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </div>
          <div className="pinta-bg  text-white">
          <FontAwesomeIcon className="icon" icon={faPinterest} />
          </div>
          <div className="skype-bg  text-white">
          <FontAwesomeIcon className="icon" icon={faSkype} />
          </div>
        </div>
          </div>
        
        </div>
      </footer>
    );
};

export default Footer;