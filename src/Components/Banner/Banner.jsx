import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'

const Banner = () => {
  return (
    <section id='banner'>
        <div className="container">
            <div className="banner-row">
                <div className="banner-text">
                    <h1>Get started your exciting <span>journey</span> with us.</h1>
                    <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
                    <Link to={"#"}>Discover Now</Link>
                </div>
                <div className="banner-img">
                    <img src="Images/Banner.png" alt="Banner" />
                </div>
            </div>
            <div className="banner-explore">
                <div className="banner-explore-row">
                    <div className="single-explore-card">
                        <a href='#'>Location <IoIosArrowDown /></a>
                        <p>Where are you going</p>
                    </div>
                    <div className="single-explore-card">
                        <a href='#'>Date <IoIosArrowDown /></a>
                        <p>When you will go</p>
                    </div>
                    <div className="single-explore-card">
                        <a href='#'>Guest <IoIosArrowDown /></a>
                        <p>Number of guest</p>
                    </div>
                    <Link className='explore-btn' to={"#"}>Explore Now</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner