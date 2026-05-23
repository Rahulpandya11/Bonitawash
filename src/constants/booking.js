// Google Form URL for booking
export const BOOKING_FORM_URL =
    process.env.REACT_APP_BOOKING_FORM_URL ||
    'https://docs.google.com/forms/d/e/1FAIpQLSftqTJll5WShR1pTLmsii8JWfIuiPqw9tY0kec5yk57fQQQSA/viewform';

// Form field entry IDs
export const FORM_FIELDS = {
    PACKAGE: process.env.REACT_APP_FORM_PACKAGE_ID,
    OWNER_NAME: process.env.REACT_APP_FORM_OWNER_NAME_ID,
    CAR_NUMBER: process.env.REACT_APP_FORM_CAR_NUMBER_ID,
    CONTACT_NUMBER: process.env.REACT_APP_FORM_CONTACT_NUMBER_ID,
    CAR_MODEL: process.env.REACT_APP_FORM_CAR_MODEL_ID,
    DATE: process.env.REACT_APP_FORM_DATE_ID,
    TIME: process.env.REACT_APP_FORM_TIME_ID
};

// Service packages
export const SERVICES = {
    ULTRA_DETAIL: {
        name: 'Ultra 375',
        price: '$375',
        duration: '120' // in minutes
    },
    LUXURY_DETAIL: {
        name: 'Luxury 325',
        price: '$325',
        duration: '90' // in minutes
    },
    SUPER_DETAIL: {
        name: 'Super 275',
        price: '$275',
        duration: '60' // in minutes
    }
};

// Business hours for booking slots
export const BUSINESS_HOURS = {
    weekdays: {
        start: '08:00',
        end: '18:00'
    },
    weekends: {
        start: '09:00',
        end: '16:45'
    }
}; 
