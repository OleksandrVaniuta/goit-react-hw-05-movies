import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/servicesAPi';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await api.fetchDataReviews(movieId).then(res => {
          setReview(res.results);
        });
      } catch {
        console.log(Error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {review.length > 0 ? (
        review.map(review => {
          return (
            <div key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </div>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
