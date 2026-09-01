import React from 'react';
import './Compare.css';

const compareData = [
  {
    label: 'Carbon Footprint',
    tunnel: (
      <>
        <span className="compare-icon compare-cross">✖</span> Up to 50 gallons of water per wash
      </>
    ),
    hand: (
      <>
        <span className="compare-icon compare-check">✔</span> Only 5 gallons of water per wash
      </>
    ),
  },
  {
    label: 'Quality',
    tunnel: (
      <>
        <span className="compare-icon compare-cross">✖</span> Average service and bad quality work
      </>
    ),
    hand: (
      <>
        <span className="compare-icon compare-check">✔</span> 5-Star Service and 100% Satisfaction
      </>
    ),
  },
  {
    label: 'Products',
    tunnel: (
      <>
        <span className="compare-icon compare-cross">✖</span> Uses cheap chemicals bought in bulk
      </>
    ),
    hand: (
      <>
        <span className="compare-icon compare-check">✔</span> Locally sourced high quality products
      </>
    ),
  },
  {
    label: 'Interior Clean',
    tunnel: (
      <>
        <span className="compare-icon compare-cross">✖</span> No work performed on car's interior
      </>
    ),
    hand: (
      <>
        <span className="compare-icon compare-check">✔</span> Complete interior service + shampoo
      </>
    ),
  },
  {
    label: 'Exterior Clean',
    tunnel: (
      <>
        <span className="compare-icon compare-cross">✖</span> Scratches and swirls all over vehicle
      </>
    ),
    hand: (
      <>
        <span className="compare-icon compare-check">✔</span> Like New, Showroom quality finish
      </>
    ),
  },
];

const detailingBenefits = [
  'Protects paint from dirt, grime, and environmental damage',
  'Helps prevent fading, swirl marks, and surface wear',
  'Keeps your car looking newer for longer',
  'Improves resale value with a well-maintained appearance',
  'Makes future cleaning quicker and easier',
];

const detailingImages = [
  {
    src: '/images/detailing1.jpg',
    title: 'Interior Renewal',
    description: 'Deep cleaning and conditioning that restores comfort, clarity, and freshness inside your vehicle.',
  },
  {
    src: '/images/detailing2.jpg',
    title: 'Paint Protection',
    description: 'Premium finishing treatments that protect your paint while enhancing gloss, depth, and shine.',
  },
  {
    src: '/images/detailing3.jpg',
    title: 'Finish & Detail',
    description: 'Expert finishing touches that leave your vehicle looking polished, protected, and road-ready.',
  },
];

const Compare = () => (
  <section className="compare-section">
    <h2 className="compare-title">Car Wash vs. Ideal Detail</h2>
    <p className="compare-subtitle">
      Our expert detailers provide a hand wash and wax that goes far beyond a typical tunnel wash. Our in-depth clean removes dirt, stains, and scratches that may have built up over time. The result? A sparkling clean car that looks its absolute best.
    </p>
    <div className="compare-table-wrapper">
      <table className="compare-table">
        <thead>
          <tr>
            <th></th>
            <th className="tunnel-header">Tunnel Wash</th>
            <th className="hand-header">Our Hand Wash</th>
          </tr>
        </thead>
        <tbody>
          {compareData.map((row, idx) => (
            <tr key={idx}>
              <td className="compare-label">{row.label}</td>
              <td>{row.tunnel}</td>
              <td>{row.hand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="detailing-showcase">
      <div className="detailing-header">
        <span className="eyebrow">Detailing Services</span>
        <h3 className="detailing-title">Car Detailing Services in San Dimas, CA</h3>
        <p>
          Bonita Wash offers professional car detailing services in San Dimas and the surrounding San Gabriel Valley, giving your vehicle the care it deserves inside and out. From a thorough wash and interior cleaning to premium finishing touches like ceramic coating, our detailers help restore and protect your car's appearance while keeping it in top condition.
        </p>
      </div>

      <div className="detailing-gallery">
        {detailingImages.map((item) => (
          <article className="detailing-card" key={item.title}>
            <img src={item.src} alt={item.title} className="detailing-image" />
            <div className="detailing-card-body">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="detailing-benefits">
        <h4>How car detailing benefits your vehicle:</h4>
        <ul className="detailing-benefits-list">
          {detailingBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="compare-mobile-cards">
      {compareData.map((row, idx) => (
        <article key={idx} className="compare-mobile-card">
          <h3 className="compare-mobile-label">{row.label}</h3>
          <div className="compare-mobile-row">
            <span className="compare-mobile-head tunnel-header">Tunnel Wash</span>
            <p>{row.tunnel}</p>
          </div>
          <div className="compare-mobile-row">
            <span className="compare-mobile-head hand-header">Our Hand Wash</span>
            <p>{row.hand}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Compare;
