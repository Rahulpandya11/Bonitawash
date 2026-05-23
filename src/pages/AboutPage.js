import React from 'react';
import About from '../components/sections/About';
import PageHero from '../components/layout/PageHero';

const AboutPage = () => {
    return (
        <>
            <PageHero
                title="Detailing Built On Craft"
                subtitle="Every surface, every corner, every finish gets trained hands and premium products from our experienced team."
                ctaText="Book With Bonita"
                secondaryText="Contact Us"
                secondaryPath="/contact"
            />
            <About />
        </>
    );
};

export default AboutPage;
