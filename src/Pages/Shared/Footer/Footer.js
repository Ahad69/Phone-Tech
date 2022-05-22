import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram, faPinterest, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faGear } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-neutral-content">
        <div>
          <FontAwesomeIcon className="gear" icon={faGear} />
          <br />
          <p className='footer-gradient'> Phone Tech Co. Ltd.</p>
        </div> 
        <div>
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