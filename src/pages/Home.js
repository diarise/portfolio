import React from "react";
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Portfolio from '../components/Portfolio';
import ContactForm from "../components/ContactForm";

function Home() {
    return (
        <div>
            <Hero />
            <Gallery />
            <Portfolio />
            <ContactForm />
        </div>

    );

}
export default Home;