import React from 'react'
import './Footer.css'
import { CiInstagram, CiMail } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { LiaAdjustSolid } from 'react-icons/lia'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="container">
            <div className="subscribe">
                <img className='absolute bottom-0 left-0' src="Images/round.png" alt="" />
                <img className='absolute top-0 right-0' src="Images/trees-f.png" alt="" />
                <div className="common-heading">
                    <h2 className='!text-white !w-[708px] mx-auto'>Subscribe and get exclusive deals & offer</h2>
                    <div className="input-group">
                        <CiMail />
                        <input placeholder='Enter your mail' type="email" />
                        <Link to={"#"}>Subscribe</Link>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-sec-1">
                    <img src="Images/Logo.png" alt="" />
                    <p>Book your trip in minute, get full
                    Control for much longer.</p>
                    <div className="social-links">
                        <Link to={"#"}><FaFacebookF /></Link>
                        <Link to={"#"}><CiInstagram /></Link>
                        <Link to={"#"}><FaTwitter /></Link>
                    </div>
                </div>
                <div className="footer-sec-2">
                    <div className="footer-card">
                        <h2>Company</h2>
                        <div className="footer-links">
                            <Link to={"#"}>About</Link>
                            <Link to={"#"}>Careers</Link>
                            <Link to={"#"}>Logistic</Link>
                            <Link to={"#"}>Privacy & Policy</Link>
                        </div>
                    </div>
                    <div className="footer-card">
                        <h2>Contact</h2>
                        <div className="footer-links">
                            <Link to={"#"}>Help/FAQ</Link>
                            <Link to={"#"}>Press</Link>
                            <Link to={"#"}>Affilates</Link>
                        </div>
                    </div>
                    <div className="footer-card">
                        <h2>More</h2>
                        <div className="footer-links">
                            <Link to={"#"}>Press Centre</Link>
                            <Link to={"#"}>Our Blog</Link>
                            <Link to={"#"}>Low fare tips</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="copyright">
                <p>Copyright, Trabook 2022. All rights reserved.</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer