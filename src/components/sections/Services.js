import React from 'react';
import './Services.css';

const Services = () => {
    const mainPackages = [
        {
            title: 'EXPRESS HAND WASH',
            price: '$59.95',
            features: [
                'Full Service car Wash',
                'Liquid carnauba Wax (applied by hand)',
                'Air Freshener',
                'Tire Dressing',
                'Wheel Bright'
            ]
        },
        {
            title: 'EXTERIOR SUPREME',
            price: '$43.95',
            features: [
                'Full service wash',
                'Blue coral express wax',
                'Black magic for tires & windows',
                'Pink clear coat conditioner',
                'Rainbow polish',
                'Poly sealant',
                'Wheel Bright',
                'Air freshener'
            ]
        },
        {
            title: '100% HAND WASH',
            price: '$39.95',
            features: [
                'Full service Hand wash',
                'Vacuum Interior',
                'Clean Windows in/out',
                'Air freshener',
                'Wheel bright',
                'Exterior Dressing',
                'Van, SUV, pickup truck +$5.00'
            ]
        },
        {
            title: 'VIP WASH',
            price: '$28.95',
            features: [
                'Full service',
                'Works wash',
                'Tri Foam Polish Conditioner',
                'Wheel bright',
                'RNX graphene'
            ]
        },
        {
            title: 'WORKS WASH',
            price: '$26.95',
            features: [
                'Full Service',
                'Victorian Wash',
                'Red Polish Conditioner',
                'Tire Dressing'
            ]
        },
        {
            title: 'VICTORIAN WASH',
            price: '$24.95',
            features: [
                'Full service',
                'Foam Bath',
                'Pre soak 1',
                'Lustra wax',
                'Air Freshener'
            ]
        },
        {
            title: 'HAND WASH & WAX',
            price: '$74.95',
            features: [
                'Detail hand wax',
                'Detail of hand wash'
            ]
        },
        {
            title: 'EXTERIOR WASH ONLY',
            price: '$14.95',
            features: [
                'Wash + Hand dry + Tire dressing'
            ]
        },
        {
            title: 'PET HAIR REMOVAL',
            price: 'From $250',
            features: [
                'Deep interior cleanup',
                'Specialized hair extraction'
            ]
        }
    ];

    const alaCarte = [
        { name: 'Ceramic Spray Protectant', price: '$25' },
        { name: 'Rainbow Polish', price: '$5' },
        { name: 'Pink Clearcoat Conditioner', price: '$3' },
        { name: 'Poly Sealant', price: '$2' },
        { name: 'Air Freshener', price: '$1.50' },
        { name: 'Tire Dressing', price: '$2.50' },
        { name: 'Wheel Bright', price: '$5' },
        { name: 'Interior Dressing', price: '$12' },
        { name: 'Exterior Dressing', price: '$12' },
        { name: 'Complete Int/Ext Dressing', price: '$22' }
    ];

    return (
        <section className="services" id="services">
            <div className="main-container">
                <h2 className="section-title">Professional Car Wash Packages</h2>
                <div className="services-grid">
                    {mainPackages.map((pkg, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-header">
                                <h3>{pkg.title}</h3>
                                <div className="price-tag">{pkg.price}</div>
                            </div>
                            <ul className="service-features">
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <i className="fas fa-check"></i> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="ala-carte-section">
                    <h2 className="section-title">A La Carte Services</h2>
                    <div className="ala-carte-grid">
                        {alaCarte.map((item, index) => (
                            <div className="ala-carte-item" key={index}>
                                <span className="item-name">{item.name}</span>
                                <span className="item-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
