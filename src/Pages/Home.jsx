import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Instruction from '../Components/Instruction/Instruction'
import Deals from '../Components/Deals/Deals'
import Plan from '../Components/Plan/Plan'
import Review from '../Components/Review/Review'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
	        <Banner />
            <Instruction />
            <Deals />
            <Plan />
            <Review />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home