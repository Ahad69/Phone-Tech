import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
            <h6>PROJECT </h6>
            <CountUp className="text-5xl fw-bold" duration={5} end={1250} />
          </div>
          <div className="count">
            <FontAwesomeIcon className="text-2xl pb-2" icon={faUser} />
            <h6>HAPPY CLIENTS</h6>
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
            <CountUp className="text-5xl fw-bold" duration={5} end={32265} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
