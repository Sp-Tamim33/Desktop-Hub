import React from 'react';
import useReview from '../Hook/useReview';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews] = useReview();

    return (
        <div>
            <h1 className='text-4xl text-center mt-7'>What our Customers Say !</h1>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;