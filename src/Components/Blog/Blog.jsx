import React, { useRef } from 'react'
import './Blog.css'
import Slider from 'react-slick/lib/slider';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Blog = () => {
var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    customPaging: (i) => <button className="custom-dot"></button>
    };
  return (
    <section id='blog'>
        <div className="container">
            <div className="common-heading">
                <h2>Get update with <span>latest blog</span></h2>
            </div>
            <div className="slider-container mt-[64px]">
                <Slider
                {...settings}>
                    <div className='blog-wrap'>
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <img src="Images/blog1.png" alt="blogCard" />
                            </div>
                            <h2>The Amazing Difference a Year of Travelling .</h2>
                            <div className="card-body">
                                <h3>
                                July 27, 2021
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='blog-wrap'>
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <img src="Images/blog2.png" alt="blogCard" />
                            </div>
                            <h2>Travel far enough, you meet yourself.</h2>
                            <div className="card-body">
                                <h3>
                                July 27, 2021
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='blog-wrap'>
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <img src="Images/blog3.png" alt="blogCard" />
                            </div>
                            <h2>How to Save Money While Visiting Africa .</h2>
                            <div className="card-body">
                                <h3>
                                July 27, 2021
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='blog-wrap'>
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <img src="Images/blog4.png" alt="blogCard" />
                            </div>
                            <h2>Reflections on 5 Months of Travel: Time to Hang</h2>
                            <div className="card-body">
                                <h3>
                                July 27, 2021
                                </h3>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
        </div>
    </section>
  )
}

export default Blog