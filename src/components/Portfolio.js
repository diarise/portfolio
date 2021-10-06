import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Masonry from "react-responsive-masonry"
import Masonry from 'react-masonry-component';
import Project from "../Json/project";
import "./style.css";

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

function Portfolio() {

    return (
        <div className="container-fluid bg-section-four">
            <div className="container pt-5 pb-5">
                <div class="row mb-4">
                    <div class="col">
                        <h2 class="mb-0">My Work</h2>
                    </div>
                </div>
                <Masonry
                    className={'row my-gallery-class'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {Project.map(post => {
                        return (
                            <div className="col-md-6 col-xxl-3">
                                <div className="card card-portfolio">
                                    {/* <div className=""> */}

                                    <div className="view overlay">
                                        <img className="card-img-top" src={post.image} alt="Card image cap" />
                                        {/* <a>
                                            <div className="card-icon">
                                                <img className="rounded-circle" src={post.icon} alt="Card image cap" />
                                            </div>
                                        </a> */}
                                    </div>

                                    <div className="card-body">


                                        <h4 className="card-title">{post.title}</h4>
                                        <hr />

                                        <p className="card-text">{post.description}</p>
                                        <hr />
                                        <p>
                                            <small class="used"><i>{post.used}</i></small>
                                        </p>
                                        <div className="btn-wraapper">
                                            <a href={post.github} className="btn btn-lg btn-repository" role="button" alt="github repository" target="_blank">
                                                <FontAwesomeIcon icon={['fab', 'github']} />
                                            </a>

                                            <a href={post.externalLink} className="btn btn-lg btn-external" alt="external link" target="_blank">
                                                <FontAwesomeIcon icon={['fa', 'external-link-alt']} />
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </div>
        </div>
    );
}
export default Portfolio;







