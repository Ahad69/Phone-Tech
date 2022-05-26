import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
   return (
        <div className="container about">
            <h1 className='gradient-text'>About Us</h1>
            <div className="row">
                <div className="about-image">
                <img  src="https://thumbs.dreamstime.com/b/smart-phone-components-isolate-blue-background-copy-space-73522296.jpg" alt="" />
                </div>
                <div className="about-content">
                <h1 className="text-red-600 font-bold text-3xl">Our Vision & Values</h1>
                    <p  className="text-lg">We aspire to become a world leader in advancing businesses through digital means. Customer satisfaction, openness, innovation, teamwork and growth, are the core values behind our company, and continue to reflect who we are, how we work, and what we strive for.</p>
                </div>
            </div>
            <hr />
            <hr />
            <hr />
            <div className="row">
                <div className="about-content">
                <h1 className="text-red-600 font-bold text-3xl">Our Purpose & Philosophy</h1>
                    <p className="text-lg">We’re inspired by our clients and work to advance their business by innovating everything digital. We’re endless innovators, constantly looking for new ways to connect the dots and connect people. We become part of your team, true partners with a sustained commitment to your business goals. </p>
                </div>

                <div className="about-image">
                <img src="https://i0.wp.com/www.mobilecellphonerepairing.com/wp-content/uploads/2012/09/Card-Level-Parts-of-Mobile-Cell-Phone.jpg?fit=1024%2C576" alt="" />
                </div>
            </div>
            
            <hr />
            <hr />
            <hr />
            <div className="bottom-content mt-5">
                <div className="left-content">
                <h1 className="gradient-text">Recent Awards </h1>
                <p  className="text-lg">2021 Great Place to Work
                    Great Place To Work® in USA, Great Place To Work® in Canada, Best Workplaces for Women in Canada, Best Workplaces for Mental Wellness in Canada, Best Workplaces in British Columbia
                    <br />
                    <br />
                    2021 Communicator Awards
                    31 Awards Of Excellence and Distinction In The Website And Mobile Categories
                    <br />
                    <br />
                    <br />
                    2021 Horizon Interactive Awards
                    Four Gold and one Silver award for excellence in interactive media
                    <br />
                    <br />
                    <br />
                    2020 UX Design Awards
                    Finalist in Product category
                    <br />
                    <br />
                    <br />
                    2020 W3 Awards
                    Silver award in mobile apps/sites
                    <br />
                    <br />
                    <br />
                    2020 MobileWebAwards
                    Three awards for excellence in mobile websites
                    <br />
                    <br />
                    <br />
                    2020 Growth List by Canadian Business
                    One of Canada’s fastest-growing companies
                    <br />
                    <br />
                    <br />
                    2020 
                    Canadian Marketing Association
                    Four CMA Awards in CX, Martech, and Innovative Media
                    <br />
                    <br />
                    <br />
                    2020, Creativepool Awards
                    People's Choice Award: Digital
                </p>
                </div>
                <hr className="hr m-20" />
                <div className="right-content">
                    <h1 className="gradient-text">Growth & Expansion</h1>
                    <p  className="text-lg">2021 
                        400+ employees spread across 16 global offices
                        <br />
                        <br />
                        <br />
                        2019 
                        Underwent global rebrand to reflect full service consultancy offering
                        <br />
                        <br />
                        <br />
                        2016
                        Acquired Wunderkraut Benelux, a leading digital agency in Belgium & Netherlands
                        <br />
                        <br />
                        <br />
                        2016
                        First APAC office opened in Hong Kong
                        <br />
                        <br />
                        <br />
                        2013
                        First European office opened in Reading, UK
                        <br />
                        <br />
                        <br />
                        2012
                        First US office opened in Atlanta, GA
                        <br />
                        <br />
                        <br />
                        2009
                        Established HQ in Vancouver, BC
                        <br />
                        <br />
                        <br />
                        2007
                        Appnovation founded by Arnold Leung
                    </p>
                </div>
            </div>
        </div>
        );
 
 }
export default AboutUs;