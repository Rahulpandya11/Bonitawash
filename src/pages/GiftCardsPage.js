import React from 'react';
import GiftCards from '../components/sections/GiftCards';
import PageHero from '../components/layout/PageHero';

const GiftCardsPage = () => {
    return (
        <>
            <PageHero
                title="Gift Cards & Membership"
                subtitle="Join our car wash membership, give the gift of a clean car, or save with our multi-wash packages."
                ctaText="Book A Detail"
                secondaryText="View Membership"
                secondaryPath="/gift-cards#membership"
            />
            <GiftCards />
        </>
    );
};

export default GiftCardsPage;
