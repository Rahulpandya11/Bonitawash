import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        {
            src: "/images/20250122-DSC04917-2-Enhanced-NR.jpg",
            caption: "After Exterior"
        },
        {
            src: "/images/washing-the-suv-car.jpg",
            caption: "Wash Process"
        },
        {
            src: "/images/20250225-DSC04950-Enhanced-NR.jpg",
            caption: "Interior Deep Clean"
        },
        {
            src: "/images/20250225-DSC04921-Enhanced-NR.jpg",
            caption: "Hand Wax Application"
        },
        {
            src: "/images/multistore.jpg",
            caption: "Multi Store"
        },
        {
            src: "/images/after-shampoo.jpg",
            caption: "After Shampoo"
        },
        {
            src: "/images/dent-removal.jpg",
            caption: "Detailing"
        },
        {
            src: "/images/20250225-DSC04946-Enhanced-NR.jpg",
            caption: "Leather Work"
        }
    ];

    return (
        <section className="gallery" id="gallery">
            <div className="main-container">
                <h2 className="section-title">
                    Our Work Gallery
                </h2>
                <div className="gallery-grid">
                    {images.map((image, index) => (
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
