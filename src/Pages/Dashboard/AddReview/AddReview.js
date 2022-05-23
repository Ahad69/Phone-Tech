import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./AddReview.css";

const AddReview = () => {
  const [rating, setRating] = useState("");
  const [error, setError] = useState(1);

  const handleRating = (event) => {
    setRating(event.target.value);
  };
  useEffect(() => {
    if (rating === "") {
      setError(false);
    } else if (rating < 1 || rating > 5) {
      setError(true);
    } else {
      setError(false);
    }
  });

  const handleReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const rating = event.target.rating.value;
    const greeting = event.target.greeting.value;
    const text = event.target.text.value;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const reviewDetails = { name, rating, greeting, text, date, time };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Your Review Added Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    event.target.reset();
  };

  return (
    <div className="addReview">
      <h1 className="gradient-text">Add a Review</h1>
      <form onSubmit={handleReview}>
        <div className="flex mb-5">
          <input
            type="textarea"
            placeholder="Greeting Word"
            className="input mr-2  input-bordered input-error"
            name="greeting"
            required
          />
          <input
            type="number"
            placeholder="Rating in 1-5"
            className="input ml-2  input-bordered input-error"
            name="rating"
            onChange={handleRating}
            required
          />
        </div>

        {error ? (
          <p className="text-sm">Review Can't be Empty or More than 5</p>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Name"
          className="input mt-3 input-bordered input-error"
          name="name"
          required
        />
        <textarea
          type="text"
          placeholder="Review Text"
          className="input mt-3  input-bordered input-error"
          name="text"
          required
        />
        <button
          disabled={error}
          id="review-button"
          className="input mt-3  input-bordered input-error"
          type="submit"
        >
          Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
