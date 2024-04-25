// ReviewForm.jsx
import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
const ReviewForm = ({ eventId, email }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/attendee/createreview", {
        eventId,
        email,
        rating,
        comment,
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("accessToken"),
        },
      });
      // Reset the form after successful submission
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rating">Rating:</label>{" "}
        <input
          type="number"
          id="rating"
          className="border-2 border-orange-200  rounded-md p-1"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="comment">Comment:</label>

        <textarea
          id="comment"
          className="border-2 border-orange-200 rounded-md p-1"
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mt-4">
        <Button color="primary" variant="contained" type="submit">
          Submit Review
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
