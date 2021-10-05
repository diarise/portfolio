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
                            {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg> */}
                            Daouda
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
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="tasks" />
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/skills"
                                    className={window.location.pathname === "/skills" ? "nav-link text-white" : "nav-link"}
                                >
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="tasks" />
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
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="tasks" />
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a className="nav-link text-white">
                                    <FontAwesomeIcon className="bi d-block mx-auto mb-1" icon="envelope" />
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