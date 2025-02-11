import React from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/LandingPage.css";
import football from "../assets/football.jpg";
import cricket from "../assets/cricket.jpg";
import batminton from "../assets/batminton.jpg";

const LandingPage = () => {
    return (
        <div className="landing-container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
                <img src={football} alt="court 1" />
            </div>
            <div>
                <img src={cricket} alt="court 2" />
            </div>
            <div>
                <img src={batminton} alt="court 3" />
            </div>
        </Carousel>

        <div className="landing-content">
            <h1>Welcome to Facility Booking</h1>
            <p>Book sports facilities easily and manage your activities!</p>
            <div className="buttons">
                <Link to="/login"><button className="btn-primary">Login</button></Link>
                <Link to="/register"><button className="btn-secondary">Sign Up</button></Link>
            </div>
        </div>
    </div>
    );
};

export default LandingPage;