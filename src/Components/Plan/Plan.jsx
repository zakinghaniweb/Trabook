import React, { useRef } from 'react'
import './Plan.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import { GiPaperPlane } from 'react-icons/gi';

const Plan = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    };
  return (
    <section id='plan'>
        <div className="container">
            <div className="common-heading">
                <h2>Best <span>vacation plan</span></h2>
                <p className='!w-[551px]'>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
                <img className='!right-[350px]' src="Images/trees.png" alt="TREE" />
            </div>
            <div className="slider-container mt-[64px]">
            <div className="flex justify-end pb-[24px] pr-[70px] gap-[24px]">
                    <button className="slide-arrows" onClick={previous}>
                        <FaArrowLeft />
                    </button>
                    <button className="slide-arrows" onClick={next}>
                        <FaArrowRight />
                    </button>
            </div>
                <Slider
                ref={slider => {
                    sliderRef = slider;
                    }}
                {...settings}>
                    <div className='plan-wrap'>
                        <div className="plan-card">
                            <div className="plan-card-img">
                                <img src="Images/plan1.png" alt="dealCard" />
                            </div>
                            <div className="card-title">
                                <h2>Rome, Italty</h2>
                                <h3>$5,42k</h3>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <GiPaperPlane className='text-brandColor text-2xl' />
                                    10 Days Trip
                                </h3>
                                <div className="rating">
                                    <FaStar />
                                    <h6>
                                    4.8
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='plan-wrap'>
                        <div className="plan-card">
                            <div className="plan-card-img">
                                <img src="Images/plan2.png" alt="dealCard" />
                            </div>
                            <div className="card-title">
                                <h2>London,UK</h2>
                                <h3>$2,42k</h3>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <GiPaperPlane className='text-brandColor text-2xl' />
                                    07 Days Trip
                                </h3>
                                <div className="rating">
                                    <FaStar />
                                    <h6>
                                    4.7
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='plan-wrap'>
                        <div className="plan-card">
                            <div className="plan-card-img">
                                <img src="Images/plan3.png" alt="dealCard" />
                            </div>
                            <div className="card-title">
                                <h2>Osaka,Japan</h2>
                                <h3>$5,42k</h3>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <GiPaperPlane className='text-brandColor text-2xl' />
                                    10 Days Trip
                                </h3>
                                <div className="rating">
                                    <FaStar />
                                    <h6>
                                    4.8
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Plan