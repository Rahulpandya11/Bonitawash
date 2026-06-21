import React, { useState } from 'react';
import './GiftCards.css';
import { openBookingForm } from '../utils/booking';

const GiftCards = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const giftCards = [
        {
            name: 'Gift Card - $50',
            price: '$50',
            description: 'Perfect for a quick wash package',
            value: 50
        },
        {
            name: 'Gift Card - $100',
            price: '$100',
            description: 'Great for multiple washes or detailing',
            value: 100,
            featured: true
        },
        {
            name: 'Gift Card - $150',
            price: '$150',
            description: 'Ideal for premium detailing services',
            value: 150
        },
        {
            name: 'Custom Amount',
            price: 'Custom',
            description: 'Choose your own amount',
            value: 0
        }
    ];

    const multiWashPackages = [
        {
            name: '3 Victorian Washes',
            originalPrice: '$80.85',
            price: '$74.95',
            savings: '$5.90',
            description: 'Three Victorian wash packages',
            washes: 3,
            type: 'Victorian'
        },
        {
            name: '5 Victorian Washes',
            originalPrice: '$134.75',
            price: '$124.95',
            savings: '$9.80',
            description: 'Five Victorian wash packages',
            washes: 5,
            type: 'Victorian',
            featured: true
        },
        {
            name: '3 Works Washes',
            originalPrice: '$86.85',
            price: '$79.95',
            savings: '$6.90',
            description: 'Three Works wash packages',
            washes: 3,
            type: 'Works'
        },
        {
            name: '5 Works Washes',
            originalPrice: '$144.75',
            price: '$134.95',
            savings: '$9.80',
            description: 'Five Works wash packages',
            washes: 5,
            type: 'Works'
        },
        {
            name: '3 VIP Washes',
            originalPrice: '$95.85',
            price: '$89.95',
            savings: '$5.90',
            description: 'Three VIP wash packages',
            washes: 3,
            type: 'VIP'
        },
        {
            name: '5 VIP Washes',
            originalPrice: '$159.75',
            price: '$149.95',
            savings: '$9.80',
            description: 'Five VIP wash packages',
            washes: 5,
            type: 'VIP',
            featured: true
        }
    ];

    const handleCardSelect = (index) => {
        setSelectedCard(index);
        setSelectedPackage(null);
    };

    const handlePackageSelect = (index) => {
        setSelectedPackage(index);
        setSelectedCard(null);
    };

    const handleGiftCardPurchase = (e, card) => {
        e.stopPropagation();
        // Open contact form or booking form with gift card selection
        window.location.href = '/contact';
    };

    const handlePackagePurchase = (e, pkg) => {
        e.stopPropagation();
        openBookingForm(pkg.name);
    };

    return (
        <section className="gift-cards">
            <div className="main-container">
                {/* Gift Cards Section */}
                <div className="gift-cards-section">
                    <h2 className="section-title">Gift Cards</h2>
                    <p className="section-subtitle">
                        Give the gift of a pristine vehicle. Our gift cards never expire and can be used for any service.
                    </p>
                    <div className="gift-cards-grid">
                        {giftCards.map((card, index) => (
                            <div
                                className={`gift-card ${selectedCard === index ? 'selected' : ''} ${card.featured ? 'featured' : ''}`}
                                key={index}
                                onClick={() => handleCardSelect(index)}
                            >
                                <div className="gift-card-icon">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <h3>{card.name}</h3>
                                <div className="gift-card-price">{card.price}</div>
                                <p className="gift-card-description">{card.description}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => handleGiftCardPurchase(e, card)}
                                >
                                    Purchase Gift Card
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="gift-card-info">
                        <p>
                            <i className="fas fa-info-circle"></i>
                            Gift cards can be purchased by contacting us directly. They are delivered via email or physical card.
                        </p>
                    </div>
                </div>

                {/* Multi-Wash Packages Section */}
                <div className="multi-wash-section">
                    <h2 className="section-title">Multi-Wash Package Deals</h2>
                    <p className="section-subtitle">
                        Save money with our prepaid wash packages. Perfect for regular customers who want to maintain their vehicle's appearance.
                    </p>
                    <div className="multi-wash-grid">
                        {multiWashPackages.map((pkg, index) => (
                            <div
                                className={`multi-wash-card ${selectedPackage === index ? 'selected' : ''} ${pkg.featured ? 'featured' : ''}`}
                                key={index}
                                onClick={() => handlePackageSelect(index)}
                            >
                                {pkg.featured && <div className="best-value-badge">BEST VALUE</div>}
                                <h3>{pkg.name}</h3>
                                <div className="package-pricing">
                                    <div className="original-price">{pkg.originalPrice}</div>
                                    <div className="package-price">{pkg.price}</div>
                                </div>
                                <div className="package-savings">Save {pkg.savings}</div>
                                <p className="package-description">{pkg.description}</p>
                                <div className="package-details">
                                    <span><i className="fas fa-check"></i> {pkg.washes} Washes</span>
                                    <span><i className="fas fa-clock"></i> No Expiration</span>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => handlePackagePurchase(e, pkg)}
                                >
                                    Buy Package
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="package-benefits">
                        <h3>Package Benefits</h3>
                        <ul>
                            <li><i className="fas fa-check-circle"></i> No expiration date - use at your convenience</li>
                            <li><i className="fas fa-check-circle"></i> Transferable to friends and family</li>
                            <li><i className="fas fa-check-circle"></i> Guaranteed pricing - avoid future price increases</li>
                            <li><i className="fas fa-check-circle"></i> Priority booking for package holders</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftCards;
