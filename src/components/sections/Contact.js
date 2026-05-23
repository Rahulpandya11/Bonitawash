import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { CONTACT_DETAILS } from '../../constants/siteData';
import { openBookingForm } from '../../utils/booking';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const CONTACT_RECEIVER_EMAIL = process.env.REACT_APP_CONTACT_RECEIVER_EMAIL || 'bonitacarwash27x7@gmail.com';

const SERVICE_OPTIONS = {
    ultra: 'Ultra Detail - $375',
    luxury: 'Luxury Detail - $325',
    super: 'Super Detail - $275',
    Wax: 'Polishing',
    other: 'Other Service'
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setStatus({
                type: 'error',
                text: 'Email service is not configured yet. Please set EmailJS values in .env and restart the app.'
            });
            return;
        }

        setIsSending(true);
        setStatus({ type: '', text: '' });

        const selectedService = SERVICE_OPTIONS[formData.service] || formData.service;
        const templateParams = {
            to_email: CONTACT_RECEIVER_EMAIL,
            customer_name: formData.name,
            customer_email: formData.email,
            customer_phone: formData.phone,
            service_name: selectedService,
            customer_message: formData.message,
            submitted_at: new Date().toLocaleString()
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: 'success',
                text: 'Thank you! Your message was sent successfully. Our team will contact you shortly.'
            });

            // Reset form after successful send
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            setStatus({
                type: 'error',
                text: 'Unable to send message right now. Please try again in a moment or call us directly.'
            });
        } finally {
            setIsSending(false);
        }

    };

    return (
        <section className="contact" id="contact">
            <div className="main-container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>{CONTACT_DETAILS.address}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p><a href={`tel:${CONTACT_DETAILS.phoneDial}`}>{CONTACT_DETAILS.phoneDisplay}</a></p>
                                <p>{CONTACT_DETAILS.schedule}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <div>
                                <h3>Hours</h3>
                                <p>{CONTACT_DETAILS.schedule}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p><a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="ultra">Ultra Detail - $375</option>
                                    <option value="luxury">Luxury Detail - $325</option>
                                    <option value="super">Super Detail - $275</option>
                                    <option value="Wax">Polishing</option>
                                    <option value="other">Other Service</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                            <button type="button" className="btn btn-outline" onClick={() => openBookingForm()}>
                                Book Through Google Form
                            </button>
                            {status.text && (
                                <p className={`contact-status ${status.type === 'success' ? 'success' : 'error'}`}>
                                    {status.text}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="map-section">
                    <h3>Find Us</h3>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.8837409022418!2d-117.81702419999998!3d34.1070518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32f398447d5c9%3A0x8ecfb1f0c9b5546!2sBonita%20Car%20Wash!5e0!3m2!1sen!2sin!4v1744294984796!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bonita Carwash Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 
