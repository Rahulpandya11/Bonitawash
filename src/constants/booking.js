// Google Form URL for booking
export const BOOKING_FORM_URL = process.env.REACT_APP_BOOKING_FORM_URL;

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
        name: 'Ultra 300',
        price: '$300',
        duration: '120' // in minutes
    },
    LUXURY_DETAIL: {
        name: 'Luxury 250',
        price: '$250',
        duration: '90' // in minutes
    },
    SUPER_DETAIL: {
        name: 'Super 200',
        price: '$200',
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
        end: '17:00'
    }
}; 