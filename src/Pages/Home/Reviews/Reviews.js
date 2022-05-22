import React from 'react';
import Rating from 'react-rating';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Reviews.css'

const Reviews = () => {
    return (
        <div>
            <div className="reviews pt-10">
                <h1 className="gradient-text">Reviews</h1>
                <div className="reviews-container">
                    <Fade up>
                    <div className="review">
                        <span className='text-xl font-bold text-orange-600'><Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating> WOW</span>
                        <hr />
                      
                        <h3 className='pt-2'>By <span className='bg-red-300'>Ahad Hossain </span> (02 March 2022 , 11:05am)</h3>
                        <p className='text-xl'>This is very good company . I am very happy with you </p>
                        <div className='flex mt-4 w-40'><FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faHeart} /> <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faReplyAll} />
                        <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faCommentDots} /></div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div className="review">
                        <span className='text-xl font-bold text-orange-600'><Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating> WOW</span>
                        <hr />
                      
                        <h3 className='pt-2'>By <span className='bg-red-300'>Ahad Hossain </span> (02 March 2022 , 11:05am)</h3>
                        <p className='text-xl'>This is very good company . I am very happy with you </p>
                        <div className='flex mt-4 w-40'><FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faHeart} /> <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faReplyAll} />
                        <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faCommentDots} /></div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div className="review">
                        <span className='text-xl font-bold text-orange-600'><Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating> WOW</span>
                        <hr />
                      
                        <h3 className='pt-2'>By <span className='bg-red-300'>Ahad Hossain </span> (02 March 2022 , 11:05am)</h3>
                        <p className='text-xl'>This is very good company . I am very happy with you </p>
                        <div className='flex mt-4 w-40'><FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faHeart} /> <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faReplyAll} />
                        <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faCommentDots} /></div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div className="review">
                        <span className='text-xl font-bold text-orange-600'><Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating> WOW</span>
                        <hr />
                      
                        <h3 className='pt-2'>By <span className='bg-red-300'>Ahad Hossain </span> (02 March 2022 , 11:05am)</h3>
                        <p className='text-xl'>This is very good company . I am very happy with you </p>
                        <div className='flex mt-4 w-40'><FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faHeart} /> <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faReplyAll} />
                        <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faCommentDots} /></div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div className="review">
                        <span className='text-xl font-bold text-orange-600'><Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating> WOW</span>
                        <hr />
                      
                        <h3 className='pt-2'>By <span className='bg-red-300'>Ahad Hossain </span> (02 March 2022 , 11:05am)</h3>
                        <p className='text-xl'>This is very good company . I am very happy with you </p>
                        <div className='flex mt-4 w-40'><FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faHeart} /> <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faReplyAll} />
                        <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faCommentDots} /></div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div className="review">
                        <span className='text-xl font-bold text-orange-600'><Rating
                        initialRating={4.5}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating> WOW</span>
                        <hr />
                      
                        <h3 className='pt-2'>By <span className='bg-red-300'>Ahad Hossain </span> (02 March 2022 , 11:05am)</h3>
                        <p className='text-xl'>This is very good company . I am very happy with you </p>
                        <div className='flex mt-4 w-40'><FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faHeart} /> <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faReplyAll} />
                        <FontAwesomeIcon className="text-2xl review-icon pr-2" icon={faCommentDots} /></div>
                    </div>
                    </Fade>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Reviews;