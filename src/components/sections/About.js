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

    // Add global mouse/touch event handlers
    useEffect(() => {
        const handleGlobalMouseMove = (event) => {
            if (!isDragging || !sliderRef.current) return;

            const rect = sliderRef.current.getBoundingClientRect();
            const position = ((event.clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.min(Math.max(position, 0), 100));
        };

        const handleGlobalMouseUp = () => {
            setIsDragging(false);
        };

        const handleGlobalTouchMove = (event) => {
            if (!isDragging || !sliderRef.current || !event.touches[0]) return;

            const rect = sliderRef.current.getBoundingClientRect();
            const position = ((event.touches[0].clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.min(Math.max(position, 0), 100));
            event.preventDefault();
        };

        // Add global event listeners
        if (isDragging) {
            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);
            document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
            document.addEventListener('touchend', handleGlobalMouseUp);
        }

        // Cleanup function
        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('touchmove', handleGlobalTouchMove);
            document.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, [isDragging]); // Only re-run effect when isDragging changes

    const handleDragStart = (event) => {
        if (event.target.closest('.slider-handle')) {
            setIsDragging(true);
            // Prevent text selection during drag
            event.preventDefault();
        }
    };

    return (
        <section className="about" id="about">
            <div className="main-container">
                <div className="about-header">
                    <h1>Show your car some love.</h1>
                    <p>
                        Get one of our detail services at our shop or at home with our mobile service. All our detailers passed 
                        background checks, are friendly and reliable. We carry our own water and electricity generators for 
                        your absolute convenience. We offer door to door pick up service as well. Transparent pricing and 5-Star 
                        Service is what makes us California Top Choice.
                    </p>
                </div>

                <div className="video-section">
                    <div className={`video-wrapper ${isPlaying ? 'playing' : ''}`}>
                        <div className="thumbnail-overlay">
                            <h2>HOW WE DETAIL</h2>
                            <span className="subtitle">EXPLAINED</span>
                            <p className="duration">2 Min Video</p>
                            <p className="description">
                                We walk you through our Car Detailing Process from start to finish on a 
                                one of a kind corvette, the transformation is night and day.
                            </p>
                        </div>
                        <video 
                            controls
                            onPlay={handleVideoPlay}
                            poster="/images/car-detailing-thumb.jpg"
                        >
                            <source src="/videos/detailing-process.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {!isPlaying && (
                            <div className="video-overlay">
                                <button className="watch-button" onClick={handleVideoPlay}>
                                    <span>Watch</span>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z"/>
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
                            <span 
                                className="label before-label"
                                style={{ opacity: sliderPosition > 80 ? 1 : 0 }}
                            >
                                Before
                            </span>
                        </div>
                        <div 
                            className="comparison-image after-image"
                            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        >
                            <img src="/images/20250225-DSC04921-Enhanced-NR.jpg" alt="After Car Detailing" />
                            <span 
                                className="label after-label"
                                style={{ opacity: sliderPosition < 20 ? 1 : 0 }}
                            >
                                After
                            </span>
                        </div>
                        <div 
                            className="slider-line"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="slider-handle">
                                <div className="slider-arrow-left"></div>
                                <div className="slider-arrow-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-gallery-section">
                    <div className="about-gallery-text">
                        <h2>Mobile Detailing Service By Certified Professionals</h2>
                        <p>
                            We are one of the only mobile detailer in Corona, California, that uses biodegradable products! 
                            Our eco-friendly products make us stand out from other businesses and will leave your car looking fabulous 
                            without any harsh chemicals, smells, or stains on the vehicle. We come directly to you for all our auto detail services, 
                            so there's no need to waste precious time traveling to an automatic car wash to get a sub-par clean.
                        </p>
                        <h3>Ideal Detail Is A Mobile Car Wash In Corona, California</h3>
                        <p>
                            We provide complete cleaning packages for your car, including interior upholstery and exterior detailing services as well! 
                            We service the entire Corona, California Metropolitan Area. If you require auto detailing services, please get in touch 
                            with Ideal Detail over the phone or make an appointment online when your schedule allows you.
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