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

const headlightBenefits = [
  'Improves nighttime visibility with clearer, brighter headlights',
  'Removes yellowing, haze, and oxidation buildup',
  'Enhances your car\'s overall appearance',
  'Increases safety for you and other drivers on the road',
  'Affordable alternative to full headlight replacement',
  'Quick service with long-lasting, noticeable results',
];

const headlightImages = [
  {
    src: '/images/detailing3.jpg',
    title: 'Lens Clarity',
    description: 'Professional restoration that removes haze and brings back a crisp, clear finish to your headlight lenses.',
  },
  {
    src: '/images/detailing2.jpg',
    title: 'Night Visibility',
    description: 'Improves brightness and road visibility so your vehicle shines at full strength after dark.',
  },
  {
    src: '/images/detailing1.jpg',
    title: 'Like-New Look',
    description: 'Restores the overall look of your vehicle with cleaner, more modern-looking headlights and a refreshed finish.',
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
        <span className="eyebrow">Headlight Restoration</span>
        <h3 className="detailing-title">Headlight Restoration Services in San Dimas, CA</h3>
        <p>
          Bonita Wash offers professional headlight restoration services in San Dimas and the surrounding San Gabriel Valley, helping restore clarity and brightness to foggy, yellowed, or hazy headlights. Over time, UV exposure and oxidation cause headlight lenses to dull and discolor — reducing visibility at night and making your car look older than it really is. Our restoration process removes that buildup and brings your headlights back to a clear, like-new finish.
        </p>
      </div>

      <div className="detailing-gallery">
        {headlightImages.map((item) => (
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
        <h4>How headlight restoration benefits your vehicle:</h4>
        <ul className="detailing-benefits-list">
          {headlightBenefits.map((benefit) => (
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
