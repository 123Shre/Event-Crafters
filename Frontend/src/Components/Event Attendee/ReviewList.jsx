import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ReviewList = () => {
  const { eventId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(eventId);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.post('http://localhost:3000/attendee/reviewsbyeventid', { eventId });
        setReviews(response.data);
      } catch (error) {
        setError(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [eventId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>
      <Link to="/dash">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" 
        >
          Back
        </button>
        </Link>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews found for this event.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review._id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{review.title}</h2>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-4 w-4 ${
                        index < review.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <p className="text-gray-500">
                <span className="font-semibold">Reviewed by:</span> {review.email}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;