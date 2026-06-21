import React, { useState, useEffect, useRef } from 'react';
import './BeforeAfter.css';

const BeforeAfter = ({ 
    beforeImage = '/images/home-before-after.jpg', 
    afterImage = '/images/home-before-after.jpg',
    title = 'See The Transformation',
    subtitle = 'Slide to reveal the amazing difference'
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

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
        <section className="before-after-section">
            <div className="main-container">
                <h2 className="section-title">{title}</h2>
                {subtitle && <p className="section-subtitle">{subtitle}</p>}
                <div
                    className="image-comparison-slider"
                    ref={sliderRef}
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                >
                    <div className="comparison-image">
                        <img src={beforeImage} alt="Before Car Detailing" />
                        <span className="label before-label" style={{ opacity: sliderPosition > 80 ? 1 : 0 }}>
                            Before
                        </span>
                    </div>
                    <div className="comparison-image after-image" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                        <img src={afterImage} alt="After Car Detailing" />
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
                <p className="slider-hint">
                    <i className="fas fa-hand-pointer"></i> Drag the slider to see the difference
                </p>
            </div>
        </section>
    );
};

export default BeforeAfter;
