import React from 'react';
import AccordionGallery from './AccordionGallery';
import './TransformationGallery.css';

const TRANSFORMATION_ITEMS = [
    { image: '/videos/IMG_0330.MOV', label: 'Exterior Wash Finish' },
    { image: '/videos/IMG_5907.MOV', label: 'Premium Detail Result' },
    { image: '/videos/IMG_5908.MP4', label: 'Interior Refresh Look' },
    { image: '/videos/IMG_6500.MOV', label: 'Final Shine Reveal' }
];

const REEL_HEIGHT = 640;
const EXPAND_RATIO = 0.56;
const REEL_WRAPPER_WIDTH = Math.round(((9 / 16) * REEL_HEIGHT) / EXPAND_RATIO);

const TransformationGallery = () => {
    return (
        <section className="transformation-gallery-section">
            <div className="main-container">
                <h2 className="section-title">See The Transformation</h2>
                <p className="transformation-gallery-subtitle">
                    Watch real Bonita Carwash results from our recent detailing sessions
                </p>
                <div
                    className="transformation-gallery-accordion"
                    style={{
                        maxWidth: `${REEL_WRAPPER_WIDTH}px`
                    }}
                >
                    <AccordionGallery
                        items={TRANSFORMATION_ITEMS}
                        defaultIndex={1}
                        expandRatio={EXPAND_RATIO}
                        trigger="hover"
                        height={REEL_HEIGHT}
                        gap={10}
                        radius={16}
                        overlayColor="#040a14"
                        accentColor="#37e2d5"
                        textColor="#f7f9ff"
                    />
                </div>
            </div>
        </section>
    );
};

export default TransformationGallery;
