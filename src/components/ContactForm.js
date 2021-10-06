import React from "react";


const ContactForm = () => {
    return (

        <div className="container-fluid bg-section-five pt-5 pb-5">
            <div className="row">

                <div className="container-contact100 mt-5 mb-5">
                    <div className="wrap-contact100">

                        <form className="contact100-form validate-form">
                            <span className="contact100-form-title">
                                Get in touch
                            </span>

                            <label className="label-input100" for="name">Your Name *</label>
                            <div className="wrap-input100 validate-input">
                                <input id="first-name" className="input100" type="text" name="name" placeholder="Name" />
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" for="email">Email Address *</label>
                            <div className="wrap-input100 validate-input">
                                <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
                                <span className="focus-input100"></span>
                            </div>



                            <label className="label-input100" for="message">Message *</label>
                            <div className="wrap-input100 validate-input">
                                <textarea id="message" className="input100" name="message" placeholder="Please enter your comments..."></textarea>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-contact100-form-btn">
                                <button className="contact100-form-btn">
                                    <span>
                                        Send
                                        <i className="zmdi zmdi-arrow-right m-l-8"></i>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;