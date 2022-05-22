import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Bounce } from "react-reveal";
import './Banner.css'




const Banner = () => {
  return (
    <div className="banner">
      <Carousel axis="vertical" autoPlay>
        <div className="banner-image">
            <div className="content">
                <h1>Good Quality and Services</h1>
                <Bounce bottom cascade>
           
                <p>Build a good future</p>
           </Bounce>
          
            </div>
            <div className="image-banner">
            <img
            alt=""
           
            src="https://i.ibb.co/HVFM5sh/pngegg-6-1.png"
          />
            </div>
        </div>
        <div className="banner-image">
         
            <div className="image-banner">
            <img
            alt=""
            src="https://i.ibb.co/yf33VMM/pngegg-7-1.png"
          />
            </div>
            <div className="content">
            <h1>Mobile Phone</h1>
            <Bounce bottom cascade>
            <p>Accessories in Stock</p>
             </Bounce>
               
            </div>
        </div>
        <div className="banner-image">
            <div className="content">
            <h1>Fast Shipping </h1>
            <Bounce bottom cascade>
            <p>All Over The World</p>
           </Bounce>
                
            </div>
            <div className="image-banner">
            <img
            alt=""
            src="https://i.ibb.co/MDFQQC0/pngegg-8-1.png"
          />
            </div>
        </div>
        <div className="banner-image">
        <div className="image-banner">
            <img
            alt=""
            src="https://i.ibb.co/jMtHsrn/pngegg-9-1.png"
          />
            </div>
            <div className="content">
            <h1>Factory Direct Sale</h1>
            <Bounce bottom cascade>
            <p>Phone's All Parts</p>
           </Bounce>
              
            </div>
           
        </div>
       
      </Carousel>
     
    </div>
  );
};

export default Banner;
