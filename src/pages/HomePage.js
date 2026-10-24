import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import TransformationGallery from '../components/sections/TransformationGallery';
import Testimonials from '../components/sections/Testimonials';
import Compare from '../components/sections/Compare';
import { DIAMOND_BAR, HOME_ADDONS, QUICK_STATS } from '../constants/siteData';

const HomePage = () => {
    return (
        <>
            <Hero />
            <section className="stats-section">
                <div className="main-container stats-grid">
                    {QUICK_STATS.map((stat) => (
                        <div className="stat-card" key={stat.label}>
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="addons-section">
                <div className="main-container">
                    <div className="area-card">
                        <div>
                            <span className="eyebrow">Diamond Bar</span>
                            <h2>{DIAMOND_BAR.title}</h2>
                            <p>{DIAMOND_BAR.subtitle}</p>
                        </div>
                        <Link to={DIAMOND_BAR.path} className="btn btn-primary">Premium Washes & Details</Link>
                    </div>
                </div>
            </section>
            <TransformationGallery />
            <Testimonials />
            <section className="addons-section">
                <div className="main-container">
                    <h2 className="section-title">Customer Add-Ons</h2>
                    <div className="addons-grid">
                        {HOME_ADDONS.map((addon) => (
                            <article className="addon-card" key={addon.title}>
                                <h3>{addon.title}</h3>
                                <p>{addon.description}</p>
                            </article>
                        ))}
                    </div>
                    <div className="addons-links">
                        <Link to="/services" className="btn btn-outline">Car Wash Menu</Link>
                        <Link to="/detailing" className="btn btn-primary">View Detail Packages</Link>
                    </div>
                </div>
            </section>
            <Compare />
        </>
    );
};

export default HomePage;
