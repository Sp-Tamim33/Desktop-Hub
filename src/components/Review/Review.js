import React from 'react';

const Review = ({ review }) => {
    const { name, img, say, ratings } = review;
    return (
        <div className='py-10'>
            <div className='border-2 w-[400px] p-5 shadow-lg rounded-xl ml-9'>
                <div className='flex items-center justify-center'>
                    <img src={img} className="w-[80px] h-[80px] rounded-full" alt="" />
                    <p className='ml-2'>{name}</p>
                </div>
                <div className='mt-5 text-center'>
                    <h1 className='text-3xl'>Good Perfomance</h1>
                    <p className='mt-3  text-gray-400'>{say}</p>
                </div>
                <div className='mt-3 text-center'>
                    <p><b>Ratings</b> : {ratings}
                        <span className='ml-2 text-orange-500'>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;