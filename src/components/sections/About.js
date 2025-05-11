import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    useEffect(() => {
        const handleGlobalMouseMove = (event) => {
            if (!isDragging || !sliderRef.current) return;
            const rect = sliderRef.current.getBoundingClientRect();
            const position = ((event.clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.min(Math.max(position, 0), 100));
        };

        const handleGlobalMouseUp = () => setIsDragging(false);

        const handleGlobalTouchMove = (event) => {
            if (!isDragging || !sliderRef.current || !event.touches[0]) return;
            const rect = sliderRef.current.getBoundingClientRect();
            const position = ((event.touches[0].clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.min(Math.max(position, 0), 100));
            event.preventDefault();
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);
            document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
            document.addEventListener('touchend', handleGlobalMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('touchmove', handleGlobalTouchMove);
            document.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, [isDragging]);

    const handleDragStart = (event) => {
        if (event.target.closest('.slider-handle')) {
            setIsDragging(true);
            event.preventDefault();
        }
    };

    return (
        <section className="about" id="about">
            <div className="main-container">
                <div className="about-header">
                    <h1>Show your car some love.</h1>
                    <p>
                        Bring your car to our shop and let’s make it shine like new!
                        We offer expert polishing, deep washing, premium waxing, leather
                        seat cleaning, and headlamp restoration — all designed to give your
                        car that fresh, showroom look. Our skilled team takes care of every
                        detail so you can drive away feeling proud of your ride. Visit us today
                        and give your car the care it deserves!.
                    </p>
                </div>

                <div className="video-section">
                    <div className={`video-wrapper ${isPlaying ? 'playing' : ''}`}>
                        <div className="thumbnail-overlay">
                            <h2>HOW WE DETAIL</h2>
                            <span className="subtitle">EXPLAINED</span>
                            <p className="duration">2 Min Video</p>
                            <p className="description">
                                Watch as this iconic Mustang transforms from daily driver to showroom-ready with our 
                                premium detailing service—every surface cleaned, polished, and protected to perfection.
                            </p>
                        </div>
                        {isPlaying ? (
                            <iframe
                                width="75%"
                                height="500"
                                src="https://www.youtube.com/embed/3WpgFgRWgas?si=s5jHY6QPEaHyNARW&rel=0&autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="video-overlay">
                                <button className="watch-button" onClick={handleVideoPlay}>
                                    <span>Watch</span>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="before-after-section">
                    <h2>See The Difference</h2>
                    <div
                        className="image-comparison-slider"
                        ref={sliderRef}
                        onMouseDown={handleDragStart}
                        onTouchStart={handleDragStart}
                    >
                        <div className="comparison-image">
                            <img src="/images/20250225-DSC04949-Enhanced-NR.jpg" alt="Before Car Detailing" />
                            <span className="label before-label" style={{ opacity: sliderPosition > 80 ? 1 : 0 }}>
                                Before
                            </span>
                        </div>
                        <div className="comparison-image after-image" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                            <img src="/images/20250225-DSC04921-Enhanced-NR.jpg" alt="After Car Detailing" />
                            <span className="label after-label" style={{ opacity: sliderPosition < 20 ? 1 : 0 }}>
                                After
                            </span>
                        </div>
                        <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
                            <div className="slider-handle">
                                <div className="slider-arrow-left"></div>
                                <div className="slider-arrow-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-gallery-section">
                    <div className="about-gallery-text">
                        <h2>Premium Wax Service</h2>
                        <p>
                            Give your car that deep, glossy shine it deserves with our expert wax service. We use
                            high-quality products that protect your paint from sun damage, rain, and road grime, while
                            bringing out a smooth,mirror-like finish. Whether you want to maintain your car's value or simply
                            enjoy that just-waxed look, our team ensures your car stands out on the road. Get ready for
                            long-lasting protection and a shine you can be proud of!
                        </p>
                        <h3>Leather & Interior Cleaning</h3>
                        <p>
                            Refresh and renew your car’s interior with our specialized leather and interior cleaning
                            service. We gently clean and condition leather seats, removing dirt, stains, and wear marks
                            while restoring their natural softness and luster. Our deep cleaning covers carpets, dashboards,
                            and every corner, leaving your cabin fresh, spotless, and smelling great. Step back into a car that
                            feels as good as new — inside and out!
                        </p>
                    </div>
                    <div className="about-gallery-images">
                        <div className="about-gallery-image-container">
                            <img src="/images/20250225-DSC04922-Enhanced-NR.jpg" alt="Car Detailing 1" />
                            <img src="/images/20250225-DSC04946-Enhanced-NR.jpg" alt="Car Detailing 2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
