import React from 'react';
import './Review.css';

const reviews = [
  {
    name: "Lalo G.",
    stars: 5,
    text: "Lalo always greet me with a smile and with respect. The service here is top notch and my car always looks magnificent."
  },
  {
    name: "Juan M.",
    stars: 5,
    text: "Excellent customer care. The manager Juan really takes care of his customers. Highly recommend for any detailing needs."
  },
  {
    name: "Nivea S.",
    stars: 5,
    text: "Warm and friendly attitude at the front register. Great experience every time I come here for over 30 years."
  }
];

const Review = () => {
  return (
    <div className="reviews-grid">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <span className="reviewer-name">{review.name}</span>
            <div className="review-stars">
              {[...Array(review.stars)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
          </div>
          <p className="review-text">"{review.text}"</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
