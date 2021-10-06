import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero(props) {
    return (
        <div className="container-fluid bg-section-two pt-5">
            <div className="container">
                <div className="row">


                    <div className="col-6">

                        <p className="lead mb-4">My name is <span className="fw-bold">Daouda Dia</span>, a full-stack web developer with five-plus years of experience in Web Design. My former colleagues would confirm that I am always up to the task and will deliver within the deadline, as they would refer me for some freelance work. Recently, I utilized my skills with my teammates using Amazon API call, Google Maps API, and currency API to pull any listing the user queries. I'm working on my boot camp certification in Web Development from the University of Riverside Extension to increase my coding knowledge and skills to follow the latest trends in HTML/CSS3, Javascript, OOP, React, and Node.JS.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content mb-5">
                            <button type="button" className="hero-btn btn-link">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </button>
                            <button type="button" className="hero-btn btn-link">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </button>
                            <a href="https://drive.google.com/file/d/1He-LWwzGgWKlqyfE-83ke2X8qLUcEeeb/view?usp=sharing" target="_blank" download type="button" className="hero-btn btn-link">
                                <FontAwesomeIcon icon={['fas', 'download']} />
                            </a>
                        </div>
                    </div>
                    <div className="col-6 hero-pic-wrapper">
                        <img className="hero-pic img-fluid" src="https://i.ibb.co/TRk8y2w/hero-pic-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;