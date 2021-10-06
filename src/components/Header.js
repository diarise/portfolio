import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
    return (
        <header>
            <div className="px-3 py-2 bg-section-one text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link text-white" : "nav-link"}
                            >
                                <img className="logo" src="https://diarise.github.io/Bootstrap-Portfolio/images/logo.png" alt="" /></Link>
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            {/* <li>
                                <Link
                                    to="/"
                                    className={
                                        window.location.pathname === "/" || window.location.pathname === "/about"
                                            ? "nav-link text-secondary"
                                            : "nav-link"
                                    }
                                >
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="home" />
                                    About Me
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    to="/about"
                                    className={window.location.pathname === "/about" ? "nav-link text-white" : "nav-link"}
                                >
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="portrait" />
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/skills"
                                    className={window.location.pathname === "/skills" ? "nav-link text-white" : "nav-link"}
                                >
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="code" />
                                    My Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className={window.location.pathname === "/projects" ? "nav-link text-white" : "nav-link"}
                                >
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="tasks" />
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={window.location.pathname === "/contact" ? "nav-link text-white" : "nav-link"}
                                >
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="envelope" />
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1He-LWwzGgWKlqyfE-83ke2X8qLUcEeeb/view?usp=sharing" target="_blank" download className="nav-link text-white">
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon={['fas', 'download']} />
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;