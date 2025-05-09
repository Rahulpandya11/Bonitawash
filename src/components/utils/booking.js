import { BOOKING_FORM_URL, SERVICES, BUSINESS_HOURS, FORM_FIELDS } from '../../constants/booking';

// Function to open booking form with pre-filled service
export const openBookingForm = (serviceName = '') => {
    // Get service details
    const service = Object.values(SERVICES).find(s => s.name === serviceName);
    
    // Construct form URL with parameters
    let formUrl = BOOKING_FORM_URL;
    
    if (service) {
        // Add service parameters to URL
        const params = new URLSearchParams();
        params.append('usp', 'pp_url');
        params.append(FORM_FIELDS.PACKAGE, service.name);
        formUrl += `?${params.toString()}`;
    }
    
    // Open form in new tab
    window.open(formUrl, '_blank');
};

// Function to validate booking time
export const isValidBookingTime = (date, time) => {
    const dateObj = new Date(date + 'T' + time);
    const day = dateObj.getDay();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    
    // Check if it's a weekend
    const isWeekend = day === 0 || day === 6;
    
    // Get business hours
    const businessHours = isWeekend ? BUSINESS_HOURS.weekends : BUSINESS_HOURS.weekdays;
    
    // Convert business hours to minutes for comparison
    const [startHour, startMinute] = businessHours.start.split(':').map(Number);
    const [endHour, endMinute] = businessHours.end.split(':').map(Number);
    
    const bookingTimeInMinutes = hours * 60 + minutes;
    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;
    
    return bookingTimeInMinutes >= startTimeInMinutes && 
           bookingTimeInMinutes <= endTimeInMinutes;
};

// Function to format date for display
export const formatBookingDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Function to format time for display
export const formatBookingTime = (time) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}; 