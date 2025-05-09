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
  </section>
);

export default Compare;
