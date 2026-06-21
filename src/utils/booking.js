import { BUSINESS_HOURS } from '../constants/booking';

// This function will be called from components that have access to BookingContext
// The actual modal opening is handled by the context
export const openBookingForm = (serviceName = '') => {
    // This is now a placeholder - actual implementation uses BookingContext
    // Components should use: const { openBookingModal } = useBooking();
    // Then call: openBookingModal(serviceName)
    console.log('Opening booking modal for:', serviceName);
    
    // Trigger a custom event that can be caught by the modal
    window.dispatchEvent(new CustomEvent('openBookingModal', { 
        detail: { packageName: serviceName } 
    }));
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