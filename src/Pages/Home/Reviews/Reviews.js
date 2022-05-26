import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Reviews.css";
import { useQuery } from "react-query";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // useEffect(()=>{
  //     fetch('https://fast-sands-29069.herokuapp.com/reviews')
  //     .then(res=> res.json())
  //     .then(data=> setReviews(data))
  // },[])

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://fast-sands-29069.herokuapp.com/reviews", {
      method: "GET",
      headers: {
        "constent-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data))
  );



  if (isLoading) {
    return (
      <div className="bg-black pt-80 pb-80">
        <svg
          style={{
            borderRadius: "50%",
            borderTop: "15px solid red",
            borderBottom: "15px solid red",
            margin: "auto",
          }}
          className="animate-spin h-20 w-20  bg-transparent  border-orange-600 ..."
        >
          {" "}
        </svg>
      </div>
    );
  }

  return (
    <div>
      <div className="reviews pt-10">
        <h1 className="gradient-text">Reviews</h1>
        <small>Here's latest 6 reviews</small>
        <div className="reviews-container">
          {reviews.map((review) => (
            <Fade up>
              <div className="review">
                <span className="text-xl font-bold text-orange-600">
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                  ></Rating>{" "}
                  {review.greeting}
                </span>
                <hr />

                <h3 className="pt-2">
                  By <span className="bg-red-300">{review.name}</span> (
                  {review.date} , {review.time})
                </h3>
                <p className="text-xl">{review.text}</p>
                <div className="flex mt-4 w-40">
                  <FontAwesomeIcon
                    className="text-2xl review-icon pr-2"
                    icon={faHeart}
                  />{" "}
                  <FontAwesomeIcon
                    className="text-2xl review-icon pr-2"
                    icon={faReplyAll}
                  />
                  <FontAwesomeIcon
                    className="text-2xl review-icon pr-2"
                    icon={faCommentDots}
                  />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
