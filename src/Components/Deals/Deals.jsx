import React, { useRef } from 'react'
import './Deals.css'
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Deals = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    };
  return (
    <section id='deals'>
        <div className="container">
            <div className="common-heading">
                <h2>Exclusive <span>deals & discounts</span></h2>
                <p>Discover our fantastic early booking discounts & start planning your journey.</p>
            </div>
            <div className="slider-container mt-[64px]">
                <Slider
                ref={slider => {
                    sliderRef = slider;
                    }}
                {...settings}>
                    <div className='deals-wrap'>
                        <div className="deals-card">
                            <div className="deals-card-img">
                                <img src="Images/deal1.png" alt="dealCard" />
                                <div className="deals-overlay">
                                    <Link to={"#"}>Book Now</Link>
                                </div>
                            </div>
                            <div className="card-title">
                                <h2>Madrid</h2>
                                <div className="rating">
                                    <FaStar />
                                    4.8
                                </div>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <FaMapMarkerAlt />
                                    Spain
                                </h3>
                                <div className="price">
                                    <div className="discount">
                                    $950
                                    </div>
                                    <div className="presentPrice">
                                    $850
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deals-wrap'>
                        <div className="deals-card">
                            <div className="deals-card-img">
                                <img src="Images/deal2.png" alt="dealCard" />
                                <div className="deals-overlay">
                                    <Link to={"#"}>Book Now</Link>
                                </div>
                            </div>
                            <div className="card-title">
                                <h2>Firenze</h2>
                                <div className="rating">
                                    <FaStar />
                                    4.5
                                </div>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <FaMapMarkerAlt />
                                    Italy
                                </h3>
                                <div className="price">
                                    <div className="discount">
                                    $850
                                    </div>
                                    <div className="presentPrice">
                                    $750
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deals-wrap'>
                        <div className="deals-card">
                            <div className="deals-card-img">
                                <img src="Images/deal3.png" alt="dealCard" />
                                <div className="deals-overlay">
                                    <Link to={"#"}>Book Now</Link>
                                </div>
                            </div>
                            <div className="card-title">
                                <h2>Paris</h2>
                                <div className="rating">
                                    <FaStar />
                                    4.4
                                </div>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <FaMapMarkerAlt />
                                    France
                                </h3>
                                <div className="price">
                                    <div className="discount">
                                    $699
                                    </div>
                                    <div className="presentPrice">
                                    $599
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='deals-wrap'>
                        <div className="deals-card">
                            <div className="deals-card-img">
                                <img src="Images/deal4.png" alt="dealCard" />
                                <div className="deals-overlay">
                                    <Link to={"#"}>Book Now</Link>
                                </div>
                            </div>
                            <div className="card-title">
                                <h2>London</h2>
                                <div className="rating">
                                    <FaStar />
                                    4.8
                                </div>
                            </div>
                            <div className="card-body">
                                <h3>
                                    <FaMapMarkerAlt />
                                    UK
                                </h3>
                                <div className="price">
                                    <div className="discount">
                                    $850
                                    </div>
                                    <div className="presentPrice">
                                    $850
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="flex justify-center gap-[24px] mt-[48px]">
                    <button className="slide-arrows" onClick={previous}>
                        <FaArrowLeft />
                    </button>
                    <button className="slide-arrows" onClick={next}>
                        <FaArrowRight />
                    </button>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Deals