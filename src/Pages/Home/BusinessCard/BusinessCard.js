import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import './BusinessCard.css'

const BusinessCard = () => {
  return (
    <div className="">
      <div className="counter">
        <h1 className="text-center gradient-text text-5xl">In 2022 </h1>
        <br />
        <div className="counts container">
          <div className="count">
            <FontAwesomeIcon className="text-2xl  pb-2" icon={faBook} />
            <h6>CUSTOMERS </h6>
            <CountUp className="text-5xl fw-bold" duration={5} end={1250} />
          </div>
          <div className="count">
            <FontAwesomeIcon className="text-2xl pb-2" icon={faStar} />
            <h6>REVIEWS</h6>
            <CountUp className="text-5xl fw-bold" duration={5} end={960} />
          </div>
          <div className="count">
            <FontAwesomeIcon className="text-2xl  pb-2" icon={faFlag} />
            <h6>COUNTRY</h6>
            <CountUp className="text-5xl fw-bold"  duration={5} end={130} />
          </div>
          <div className="count">
            <FontAwesomeIcon className="text-2xl  pb-2" icon={faDollar} />
            <h6>REVENUE</h6>
            <CountUp className="text-5xl fw-bold" duration={32265} end={32265} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
