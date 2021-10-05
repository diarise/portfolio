import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero(props) {
    return (
        <div className="container-fluid bg-section-two">
            <div className="container">
                <div className="px-4 py-5">
                    <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <p className="lead mb-4">Hi, my name is</p>
                    <h1 className="display-5 fw-bold">Daouda Dia</h1>
                    <div className="col-lg-8">
                        <p className="lead mb-4">A full-stack web developer with five-plus years of experience in Web Design. My former colleagues would confirm that I am always up to the task and will deliver within the deadline, as they would refer me for some freelance work. Recently, I utilized my skills with my teammates using Amazon API call, Google Maps API, and currency API to pull any listing the user queries. I'm working on my boot camp certificate in Web Development from the University of Riverside Extension to increase my coding knowledge and skills to follow the latest trends in HTML/CSS3, Javascript, OOP, React, and Node.JS. My years of experience, passion for making unique user experiences, and leadership will make me a favorable candidate.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                                Check out my <FontAwesomeIcon icon={['fab', 'github']} />
                            </button>
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;