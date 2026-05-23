import React from 'react';
import './Gallery.css';
import { GALLERY_IMAGES } from '../../constants/siteData';

const Gallery = () => {
    return (
        <section className="gallery" id="gallery">
            <div className="main-container">
                <h2 className="section-title">
                    Our Work Gallery
                </h2>
                <div className="gallery-grid">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={image.src} alt={image.caption} loading="lazy" />
                            <div className="gallery-caption">{image.caption}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery; 
