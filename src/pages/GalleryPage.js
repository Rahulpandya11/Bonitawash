import React from 'react';
import Gallery from '../components/sections/Gallery';
import PageHero from '../components/layout/PageHero';

const GalleryPage = () => {
    return (
        <>
            <PageHero
                title="Real Cars. Real Transformations."
                subtitle="Browse before-and-after highlights from recent detailing, interior refresh, and polishing jobs."
                ctaText="Book Similar Results"
                secondaryText="Our Services"
                secondaryPath="/services"
            />
            <Gallery />
        </>
    );
};

export default GalleryPage;
