import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PromoPopup.css';
import { openBookingForm } from '../../utils/booking';
import { SEASONAL_PROMOS } from '../../constants/siteData';

const toKey = ({ month, day }) => month * 100 + day;

export const getActivePromo = (date = new Date()) => {
    const preview = new URLSearchParams(window.location.search).get('promo');
    if (preview) return SEASONAL_PROMOS.find(({ id }) => id === preview);
    const today = toKey({ month: date.getMonth() + 1, day: date.getDate() });
    return SEASONAL_PROMOS.find(({ start, end }) => {
        const from = toKey(start);
        const to = toKey(end);
        return from <= to ? today >= from && today <= to : today >= from || today <= to;
    });
};

const dismissedKey = (id) => `promo-dismissed-${id}`;

const PAGE_PROMOS = { '/gift-cards': 'winter-membership' };

const PromoPopup = () => {
    const [promo, setPromo] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const pagePromoId = PAGE_PROMOS[pathname];
        const active = pagePromoId
            ? SEASONAL_PROMOS.find(({ id }) => id === pagePromoId)
            : getActivePromo();
        if (!active) return;
        try {
            if (sessionStorage.getItem(dismissedKey(active.id))) return;
        } catch (e) {}
        const timer = setTimeout(() => setPromo(active), 500);
        return () => clearTimeout(timer);
    }, [pathname]);

    if (!promo) return null;

    const close = () => {
        try {
            sessionStorage.setItem(dismissedKey(promo.id), '1');
        } catch (e) {}
        setPromo(null);
    };

    const handleBook = () => {
        close();
        openBookingForm(promo.ctaPackage);
    };

    return (
        <div className="promo-popup-overlay" onClick={close}>
            <div
                className={`promo-popup promo-${promo.id}`}
                role="dialog"
                aria-modal="true"
                aria-label={promo.title}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="promo-popup-close" onClick={close} aria-label="Close">
                    <i className="fas fa-times"></i>
                </button>
                {promo.emoji && <div className="promo-popup-emoji" aria-hidden="true">{promo.emoji}</div>}
                <span className="eyebrow">{promo.eyebrow}</span>
                <h2>{promo.title}</h2>
                <p>{promo.description}</p>
                {promo.secondary && <p className="promo-popup-secondary">{promo.secondary}</p>}
                <div className="promo-popup-actions">
                    {promo.ctaPath ? (
                        <Link to={promo.ctaPath} className="btn btn-primary" onClick={close}>{promo.ctaText}</Link>
                    ) : (
                        <button className="btn btn-primary" onClick={handleBook}>{promo.ctaText}</button>
                    )}
                    <button className="btn btn-outline" onClick={close}>Maybe Later</button>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
