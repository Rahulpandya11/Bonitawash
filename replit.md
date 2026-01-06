# Bonita Carwash - React Application

## Overview

This is a React-based single-page website for Bonita Carwash, a premium car detailing business. The application serves as a marketing and booking platform, featuring service information, pricing, gallery, testimonials, and integration with Google Forms for appointment scheduling. Built with Create React App and React 19, it follows a component-based architecture with a focus on user experience and visual presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19.1 with Create React App (CRA) as the build toolchain
- **Structure**: Component-based architecture with clear separation between layout components, section components, and utility components
- **Styling**: CSS modules with CSS custom properties (CSS variables) for theming, stored in component-adjacent CSS files
- **Icons**: Font Awesome 6.7 for iconography

### Component Organization
```
src/
├── components/
│   ├── layout/     # Header, Footer - persistent UI elements
│   ├── sections/   # Hero, Services, Pricing, Gallery, etc. - page sections
│   └── utils/      # ScrollToTop, booking utilities - reusable functionality
├── constants/      # Configuration values (booking.js)
├── styles/         # Global styles (main.css)
└── utils/          # Helper functions
```

### Design Patterns
- **Single Page Application**: All content rendered in one page with smooth scroll navigation
- **Functional Components**: All components use React hooks (useState, useEffect, useRef)
- **Environment Variables**: Sensitive configuration (Google Form IDs, URLs) managed through environment variables with `REACT_APP_` prefix
- **CSS Variables**: Centralized theming using CSS custom properties defined in `:root`

### Booking System Integration
The booking system uses Google Forms as the backend:
- Form URL and field IDs are stored in environment variables
- `openBookingForm()` utility constructs pre-filled form URLs with service parameters
- Business hours validation logic included for booking time checks
- No direct database integration - all data flows through Google Forms/Sheets

### State Management
- Local component state only (no Redux or Context API)
- State primarily used for UI interactions (menu toggle, scroll position, form inputs, slider position)

## External Dependencies

### Third-Party Services
- **Google Forms**: Primary booking system backend - collects customer information and appointment requests
- **Google Calendar**: Integration for appointment scheduling (configured via Google Apps Script)
- **Google Sheets**: Stores form responses for booking management

### NPM Packages
- `react` / `react-dom` (v19.1): Core React framework
- `react-scripts` (v5.0.1): Create React App build toolchain
- `@fortawesome/fontawesome-free` (v6.7.2): Icon library
- `web-vitals` (v4.2.4): Performance monitoring

### Configuration Requirements
Environment variables needed (prefix with `REACT_APP_`):
- `REACT_APP_BOOKING_FORM_URL`: Google Form URL for bookings
- `REACT_APP_FORM_PACKAGE_ID`: Form field ID for package selection
- `REACT_APP_FORM_OWNER_NAME_ID`: Form field ID for owner name
- `REACT_APP_FORM_CAR_NUMBER_ID`: Form field ID for car number
- `REACT_APP_FORM_CONTACT_NUMBER_ID`: Form field ID for contact number
- `REACT_APP_FORM_CAR_MODEL_ID`: Form field ID for car model
- `REACT_APP_FORM_DATE_ID`: Form field ID for date
- `REACT_APP_FORM_TIME_ID`: Form field ID for time

### Development Commands
- `npm start`: Run development server on port 3000
- `npm run build`: Create production build
- `npm test`: Run test suite