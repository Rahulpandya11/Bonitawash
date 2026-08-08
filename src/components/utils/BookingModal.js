import React, { useState, useEffect } from 'react';
import './BookingModal.css';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAIL_CONFIG } from '../../config/emailConfig';
import { SERVICE_PACKAGES, GIFT_CARDS, MULTI_WASH_PACKAGES, DETAILING_PACKAGES } from '../../constants/siteData';

const BookingModal = ({ isOpen, onClose, selectedPackage = '' }) => {
    const [formData, setFormData] = useState({
        ownerName: '',
        contactNumber: '',
        email: '',
        carModel: '',
        carNumber: '',
        packageName: selectedPackage,
        date: '',
        hours: '',
        minutes: '',
        timeSlot: 'AM',
        additionalNotes: ''
    });

    const [carPhotos, setCarPhotos] = useState([]);
    const [photoPreview, setPhotoPreview] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        if (isOpen && selectedPackage) {
            setFormData(prev => ({ ...prev, packageName: selectedPackage }));
        }
    }, [isOpen, selectedPackage]);

    useEffect(() => {
        // Prevent body scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Validate hours (1-12)
        if (name === 'hours') {
            const numValue = parseInt(value);
            if (value === '' || (numValue >= 1 && numValue <= 12)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
            return;
        }
        
        // Validate minutes (00-59)
        if (name === 'minutes') {
            const numValue = parseInt(value);
            if (value === '' || (numValue >= 0 && numValue <= 59)) {
                const formatted = value ? String(numValue).padStart(2, '0') : '';
                setFormData(prev => ({
                    ...prev,
                    [name]: formatted
                }));
            }
            return;
        }
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length + carPhotos.length > 5) {
            alert('You can upload maximum 5 photos');
            return;
        }

        // Check file sizes (max 5MB per file)
        const oversizedFiles = files.filter(file => file.size > 5 * 1024 * 1024);
        if (oversizedFiles.length > 0) {
            alert('Each photo must be less than 5MB');
            return;
        }

        setCarPhotos(prev => [...prev, ...files]);

        // Create preview URLs
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(prev => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removePhoto = (index) => {
        setCarPhotos(prev => prev.filter((_, i) => i !== index));
        setPhotoPreview(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Check if EmailJS is configured
        if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
            setSubmitStatus('not-configured');
            setIsSubmitting(false);
            return;
        }

        try {
            // Initialize EmailJS with your public key from config
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

            // Format time with AM/PM
            const formattedTime = `${formData.hours}:${formData.minutes} ${formData.timeSlot}`;

            // Create calendar event details
            // Convert 12-hour format to 24-hour format for Date object
            let hours24 = parseInt(formData.hours);
            if (formData.timeSlot === 'PM' && hours24 !== 12) {
                hours24 += 12;
            } else if (formData.timeSlot === 'AM' && hours24 === 12) {
                hours24 = 0;
            }
            const timeString = `${String(hours24).padStart(2, '0')}:${formData.minutes}`;
            const bookingDateTime = new Date(`${formData.date}T${timeString}`);
            const endDateTime = new Date(bookingDateTime.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours
            
            // Format dates for calendar (YYYYMMDDTHHMMSS format)
            const formatDateForCal = (date) => {
                return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
            };

            const calendarEvent = {
                start: formatDateForCal(bookingDateTime),
                end: formatDateForCal(endDateTime),
                summary: `Car Wash - ${formData.packageName}`,
                description: `Booking for ${formData.ownerName}\\nCar: ${formData.carModel} (${formData.carNumber})\\nPhone: ${formData.contactNumber}\\nEmail: ${formData.email}\\nNotes: ${formData.additionalNotes || 'None'}`,
                location: 'Bonita Car Wash'
            };

            // Create Google Calendar and Outlook calendar links
            const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.summary)}&dates=${calendarEvent.start}/${calendarEvent.end}&details=${encodeURIComponent(calendarEvent.description)}&location=${encodeURIComponent(calendarEvent.location)}`;
            
            const outlookCalendarLink = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(calendarEvent.summary)}&startdt=${bookingDateTime.toISOString()}&enddt=${endDateTime.toISOString()}&body=${encodeURIComponent(calendarEvent.description)}&location=${encodeURIComponent(calendarEvent.location)}`;

            // Prepare email template parameters
            const templateParams = {
                to_email: EMAIL_CONFIG.TO_EMAIL,
                owner_name: formData.ownerName,
                contact_number: formData.contactNumber,
                email: formData.email,
                car_model: formData.carModel,
                car_number: formData.carNumber,
                package_name: formData.packageName,
                booking_date: formData.date,
                booking_time: formattedTime,
                additional_notes: formData.additionalNotes || 'None',
                photo_count: carPhotos.length,
                submission_date: new Date().toLocaleString(),
                google_calendar_link: googleCalendarLink,
                outlook_calendar_link: outlookCalendarLink,
                // Include photo info
                photos_info: carPhotos.length > 0 
                    ? `${carPhotos.length} photo(s) uploaded: ${carPhotos.map((p, i) => `${i+1}. ${p.name}`).join(', ')}`
                    : 'No photos uploaded'
            };

            // Send email using EmailJS with config values
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );

            if (response.status === 200) {
                setSubmitStatus('success');
                // Reset form after 2 seconds
                setTimeout(() => {
                    resetForm();
                    onClose();
                }, 2000);
            }
        } catch (error) {
            console.error('Error sending booking:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            ownerName: '',
            contactNumber: '',
            email: '',
            carModel: '',
            carNumber: '',
            packageName: '',
            date: '',
            hours: '',
            minutes: '',
            timeSlot: 'AM',
            additionalNotes: ''
        });
        setCarPhotos([]);
        setPhotoPreview([]);
        setSubmitStatus(null);
    };

    const handleClose = () => {
        if (!isSubmitting) {
            resetForm();
            onClose();
        }
    };

    if (!isOpen) return null;

    // Get today's date for min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="booking-modal-overlay" onClick={handleClose}>
            <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={handleClose} disabled={isSubmitting}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-header">
                    <h2>Book Your Service</h2>
                    <p>Fill in the details below to confirm your booking</p>
                </div>

                {submitStatus === 'success' && (
                    <div className="alert alert-success">
                        <i className="fas fa-check-circle"></i>
                        Booking confirmed! We'll contact you shortly.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="alert alert-error">
                        <i className="fas fa-exclamation-circle"></i>
                        Failed to send booking. Please try again or contact us directly.
                  

                {submitStatus === 'not-configured' && (
                    <div className="alert alert-warning">
                        <i className="fas fa-info-circle"></i>
                        Email service is not configured yet. Please contact us directly at <strong>bonitacarwash27x7@gmail.com</strong> or call us to complete your booking.
                    </div>
                )}  </div>
                )}

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="ownerName">
                                <i className="fas fa-user"></i> Owner Name *
                            </label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactNumber">
                                <i className="fas fa-phone"></i> Contact Number *
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                                placeholder="(555) 123-4567"
                                pattern="[0-9+\-\s\(\)]+"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">
                                <i className="fas fa-envelope"></i> Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="carModel">
                                <i className="fas fa-car"></i> Car Model *
                            </label>
                            <input
                                type="text"
                                id="carModel"
                                name="carModel"
                                value={formData.carModel}
                                onChange={handleChange}
                                required
                                placeholder="Toyota Camry 2020"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="carNumber">
                                <i className="fas fa-hashtag"></i> Car Number/Plate *
                            </label>
                            <input
                                type="text"
                                id="carNumber"
                                name="carNumber"
                                value={formData.carNumber}
                                onChange={handleChange}
                                required
                                placeholder="ABC-1234"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="packageName">
                                <i className="fas fa-box"></i> Package *
                            </label>
                            <select
                                id="packageName"
                                name="packageName"
                                value={formData.packageName}
                                onChange={handleChange}
                                required
                                className="form-select"
                            >
                                <option value="">Select a package</option>
                                
                                {/* Service Packages */}
                                <optgroup label="🚗 Car Wash Packages">
                                    {SERVICE_PACKAGES.map((pkg, index) => (
                                        <option key={`service-${index}`} value={pkg.title}>
                                            {pkg.title} - {pkg.price}
                                        </option>
                                    ))}
                                </optgroup>
                                
                                {/* Premium Detailing Packages */}
                                <optgroup label="✨ Premium Detailing Packages">
                                    {DETAILING_PACKAGES.map((pkg, index) => (
                                        <option key={`detailing-${index}`} value={pkg.name}>
                                            {pkg.name} - {pkg.price}
                                        </option>
                                    ))}
                                </optgroup>
                                
                                {/* Gift Cards */}
                                <optgroup label="🎁 Gift Cards">
                                    {GIFT_CARDS.map((card, index) => (
                                        <option key={`gift-${index}`} value={card.name}>
                                            {card.name} - {card.price}
                                        </option>
                                    ))}
                                </optgroup>
                                
                                {/* Multi-Wash Deals */}
                                <optgroup label="💰 Multi-Wash Deals (Save Money!)">
                                    {MULTI_WASH_PACKAGES.map((deal, index) => (
                                        <option key={`deal-${index}`} value={deal.name}>
                                            {deal.name} - {deal.price} (Save {deal.savings})
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date">
                                <i className="fas fa-calendar"></i> Preferred Date *
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                min={today}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hours">
                                <i className="fas fa-clock"></i> Preferred Time *
                            </label>
                            <div className="time-picker-group">
                                <input
                                    type="number"
                                    id="hours"
                                    name="hours"
                                    value={formData.hours}
                                    onChange={handleChange}
                                    required
                                    className="time-input hours-input"
                                    placeholder="HH"
                                    min="1"
                                    max="12"
                                />
                                <span className="time-separator">:</span>
                                <input
                                    type="number"
                                    id="minutes"
                                    name="minutes"
                                    value={formData.minutes}
                                    onChange={handleChange}
                                    required
                                    className="time-input minutes-input"
                                    placeholder="MM"
                                    min="0"
                                    max="59"
                                />
                                <select
                                    name="timeSlot"
                                    value={formData.timeSlot}
                                    onChange={handleChange}
                                    className="time-slot-select"
                                    required
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="additionalNotes">
                            <i className="fas fa-comment"></i> Additional Notes (Optional)
                        </label>
                        <textarea
                            id="additionalNotes"
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Any special requests or instructions..."
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>
                            <i className="fas fa-camera"></i> Upload Car Photos (Optional - Max 5 photos, 5MB each)
                        </label>
                        <div className="photo-upload-area">
                            <input
                                type="file"
                                id="carPhotos"
                                accept="image/*"
                                multiple
                                onChange={handlePhotoUpload}
                                style={{ display: 'none' }}
                                disabled={carPhotos.length >= 5}
                            />
                            <label htmlFor="carPhotos" className={`upload-label ${carPhotos.length >= 5 ? 'disabled' : ''}`}>
                                <i className="fas fa-cloud-upload-alt"></i>
                                <span>Click to upload photos</span>
                            </label>

                            {photoPreview.length > 0 && (
                                <div className="photo-preview-grid">
                                    {photoPreview.map((preview, index) => (
                                        <div key={index} className="photo-preview-item">
                                            <img src={preview} alt={`Car ${index + 1}`} />
                                            <button
                                                type="button"
                                                className="remove-photo-btn"
                                                onClick={() => removePhoto(index)}
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Sending...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-check"></i> Confirm Booking
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
