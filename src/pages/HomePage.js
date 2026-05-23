import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import Compare from '../components/sections/Compare';
import { HOME_ADDONS, QUICK_STATS } from '../constants/siteData';

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
                        <Link to="/services" className="btn btn-outline">Explore All Services</Link>
                        <Link to="/pricing" className="btn btn-primary">View Packages</Link>
                    </div>
                </div>
            </section>
            <Compare />
        </>
    );
};

export default HomePage;
