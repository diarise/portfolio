import * as React from 'react';
import Masonry from 'react-masonry-component';

import Data from "../Json/data";
import "./style.css";

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
                        <h2 class="mb-0">My Technical Skills</h2>
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