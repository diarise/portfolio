import * as React from 'react';
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Data from "../Json/data";
import "./style.css";

const icons = require("@fortawesome/free-solid-svg-icons");

const myJson = {
    Flow: [
        {
            // icon: "faReact",
            // icon({ prefix: 'fas', iconName: 'camera' })
        }
    ]
};


const camera = ({ prefix: 'fas', iconName: 'camera' })

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }



function Gallery() {

    return (
        <div className="container-fluid bg-section-three">
            <div className="container pt-5 pb-5">
                <div class="row mb-4">
                    <div class="col">
                        <h2 class="mb-0">My Skills</h2>
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
                    {Data.map(post => {
                        return (
                            <div className="col-sm-6 col-lg-2 mb-4">
                                <div className="card custom-card">
                                    <div id="icon-wrapper" className={post.background}>
                                        <img className="card-img-top image-element-class p-5" alt="..." src={post.icon} />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">{post.title}</h6>
                                        {/* <p className="card-text">{post.description}</p> */}
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
export default Gallery;