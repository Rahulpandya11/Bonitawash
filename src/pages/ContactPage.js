import React from 'react';
import Contact from '../components/sections/Contact';
import PageHero from '../components/layout/PageHero';

const ContactPage = () => {
    return (
        <>
            <PageHero
                title="Talk To The Bonita Team"
                subtitle="Need help choosing a package or asking about a custom detail? Send us a message or call directly."
                ctaText="Book Appointment"
                secondaryText="View Pricing"
                secondaryPath="/pricing"
            />
            <Contact />
        </>
    );
};

export default ContactPage;
