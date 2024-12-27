import React, { useRef } from 'react'
import './Review.css'
import Slider from 'react-slick/lib/slider';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Review = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    };
  return (
    <section id='review'>
        <div className="container">
            <div className="review-row">
                <div className="review-text w-[43%]">
                    <div className="common-heading !w-[394px]">
                        <h2 className='!text-start'>What people say
                        <span> about Us.</span></h2>
                        <p className='!text-start !mx-0'>Our Clients send us bunch of smilies with our services and we love them.</p>
                    </div>
                    <div className="pt-[32px] flex gap-[24px]">
                        <button className="slide-arrows" onClick={previous}>
                            <FaArrowLeft />
                        </button>
                        <button className="slide-arrows" onClick={next}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="slider-container relative !w-[50%]">
                    <img className='plane1' src="Images/planes1.png" alt="plane" />
                    <Slider
                    ref={slider => {
                        sliderRef = slider;
                        }}
                    {...settings}>
                        <div className="!flex !justify-center !pt-[50px] !pb-[10px]">
                            <div className="review-card">
                                <img src="Images/pfp.png" alt="" />
                                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                <h2>Mike taylor</h2>
                                <h3>Lahore, Pakistan</h3>
                            </div>
                        </div>
                        <div className="!flex !justify-center !pt-[50px] !pb-[10px]">
                            <div className="review-card">
                                <img src="Images/pfp.png" alt="" />
                                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                <h2>Mike taylor</h2>
                                <h3>Lahore, Pakistan</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Review