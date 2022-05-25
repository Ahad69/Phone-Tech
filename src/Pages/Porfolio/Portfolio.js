import React from "react";
import "./Portfolio.css";
import { Fade } from "react-reveal";

const Portfolio = () => {
  return (
    <div className="myself-container">
      <div className="myself mt-80">
        <div className="mySelf-image">
          <img
            src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/281760173_1067836044113090_7794491380868506137_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHdbe92oqWBT7NoN4DvyEv7oEQqCL0-txegRCoIvT63Fz1jQCbzEPrOpxgkF1xtxxBDL1tqugamnggg_NwGeCyY&_nc_ohc=Q15bAHlDKZoAX9tuC8b&_nc_ht=scontent.fdac99-1.fna&oh=00_AT88XaODwgindVMvH0vkqtC-uvyivgjvzOtTWvCwnRCseA&oe=62932980"
            alt=""
          />
        </div>
        <div className="mySelf-content">
          <p>Name : Ahad Hossain</p>
          <p className="text-4xl">Email : Ahadxx99@gmail.com</p>
          <div className="education mt-5">
            <h1 className="text-red-600"> SSC 2016 (Commerce)</h1>
            <h6>Multilateral High School, Sirajganj</h6>
            <br />
            <h1 className="text-red-600"> HSC 2018 (Commerce)</h1>
            <h6>Sirajganj Government College, Sirajganj</h6>
            <br />
            <h1 className="text-red-600">
              {" "}
              BBA 2018-19 sessoin (Accounting Department)
            </h1>
            <h6>National University, Gazipur , Bangladesh</h6>
            <br />

            <h1 className="text-red-600">Programming Skills</h1>
            <h6>
              React.js Next.js , Node.js , Express.js , MongoDB , Heroku ,
              Firebase, React Font-awesome , AOS , Text Editor Quill , React
              Bootstrap , React CountUp , React Parallax , React Spinner , React
              Wevify , React Sweaper.{" "}
            </h6>
          </div>
        </div>
      </div>
      {/* 

 */}
      <div className="mt-20">
        <h1 className="gradient-text">My Portfolio</h1>

        <div className="first-porfolio mt-20">
          <Fade left>
            <div className="first-image"></div>
          </Fade>
          <Fade right cascade>
            <div className="first-content">
              <p className="portfolio-title">
                Name :{" "}
                <span className="text-red-600">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    alt="eRevolute"
                    href="https://erevolute.com/"
                  >
                    eRevolute
                  </a>
                </span>{" "}
              </p>
              <p className="text-2xl">
                Script Language :{" "}
                <span className="text-red-600">
                  {" "}
                  Next.js , Node.js , Express.js{" "}
                </span>
              </p>
              <br />
              <p className="text-2xl">
                Frameworks and libraries :{" "}
                <span className="text-red-600">
                  MongoDB , Heroku , Firebase, React Font-awesome , AOS , Text
                  Editor Quill , React Bootstrap , React CountUp , React
                  Parallax , React Spinner , React Wevify , React Sweaper.{" "}
                </span>
              </p>
              <br />
              <br />
              <div className="login-btn ">
                <button className="font-bold"> <a href="https://erevolute.com/">Live Site</a> </button>
              </div>
            </div>
          </Fade>
        </div>

        {/* h */}

        <div className="second-porfolio mt-20">
       
          <Fade right cascade>
            <div className="second-content">
              <p className="portfolio-title">
                Name :{" "}
                <span className="text-red-600">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    alt="eRevolute"
                    href="https://assignment-11-car.web.app//"
                  >
                    Car Corners
                  </a>
                </span>{" "}
              </p>
              <p className="text-2xl">
                Script Language :{" "}
                <span className="text-red-600">
                  {" "}
                 React.js , Node.js , Express.js{" "}
                </span>
              </p>
              <br />
              <p className="text-2xl">
                Frameworks and libraries :{" "}
                <span className="text-red-600">
                  MongoDB , Heroku , Firebase, React Font-awesome , React Bootstrap , React CountUp , React Spinner , React Sweaper , React Tabs.{" "}
                </span>
              </p>
              <br />
              <br />
              <div className="login-btn ">
                <button className="font-bold"> <a href="https://assignment-11-car.web.app/">Live Site</a> </button>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="second-image"></div>
          </Fade>
        </div>



        <div className="third-porfolio mt-20 pb-20">
        <Fade left>
            <div className="third-image"></div>
          </Fade>
          <Fade right cascade>
            <div className="third-content">
              <p className="portfolio-title">
                Name :{" "}
                <span className="text-red-600">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    alt="eRevolute"
                    href="https://assignment-11-c2fc2.web.app/"
                  >
                  Travel World
                  </a>
                </span>{" "}
              </p>
              <p className="text-2xl">
                Script Language :{" "}
                <span className="text-red-600">
                  {" "}
                 React.js , Node.js , Express.js{" "}
                </span>
              </p>
              <br />
              <p className="text-2xl">
                Frameworks and libraries :{" "}
                <span className="text-red-600">
                  MongoDB , Heroku , Firebase, React Hash Link , Slick Carousel , React Slick ,   React Font-awesome , React Bootstrap , React CountUp , React Spinner , React Sweaper , React Tabs.{" "}
                </span>
              </p>
              <br />
              <br />
              <div className="login-btn ">
                <button className="font-bold"> <a href="https://assignment-11-c2fc2.web.app/">Live Site</a> </button>
              </div>
            </div>
          </Fade>
        
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
