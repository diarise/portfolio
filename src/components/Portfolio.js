import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../Json/project";
import "./style.css";

function Portfolio() {

    return (
        <div className="container-fluid bg-section-five">
            <div className="container pt-5 pb-5">
                <div class="row mb-4">
                    <div class="col">
                        <h2 class="mb-0">My Work</h2>
                    </div>
                </div>
                <div className="row">
                    {Project.map(post => {
                        return (
                            <div className="card m-2 col-sm-6 col-lg-4 card-portfolio">
                                {/* <div className=""> */}

                                <div className="view overlay">
                                    <img className="card-img-top" src={post.image} alt="Card image cap" />
                                    <a>
                                        <div className="card-icon">
                                            <img className="rounded-circle" src={post.icon} alt="Card image cap" />
                                        </div>
                                    </a>
                                </div>





                                <div className="card-body">


                                    <h4 className="card-title">{post.title}</h4>
                                    <hr />

                                    <p className="card-text">{post.description}</p>
                                    <hr />
                                    <p>
                                        <small class="text-muted">With faded secondary text</small>
                                    </p>
                                    <a href={post.github} className="btn-link btn-rounded btn-lg px-4 gap-3" alt="github repository" target="_blank">
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </a>

                                    <a href={post.externalLink} className="btn-link btn-rounded btn-lg px-4 gap-3" alt="external link" target="_blank">
                                        <FontAwesomeIcon icon={['fa', 'external-link-alt']} />
                                    </a>


                                </div>
                            </div>








                        )
                    })}
                </div>
            </div>
        </div >
    );
}
export default Portfolio;






