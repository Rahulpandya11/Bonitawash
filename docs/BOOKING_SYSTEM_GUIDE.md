# Carwash Booking System Guide

## System Overview
The booking system consists of:
1. A Google Form for collecting booking details
2. Integration with your website's booking buttons
3. Automatic calendar event creation
4. Email notifications for new bookings

## Important URLs
- Google Form Admin: https://docs.google.com/forms/d/e/1FAIpQLSfIkZa9Q2D6vMC9D2OCB2yMzFMr1n5jVowa5erSRaJoBMctPw/edit
- Form Responses: https://docs.google.com/forms/d/e/1FAIpQLSfIkZa9Q2D6vMC9D2OCB2yMzFMr1n5jVowa5erSRaJoBMctPw/responses

## Service Packages
Current packages configured in the system:
- Ultra 300 ($300, 120 minutes)
- Luxury 250 ($250, 90 minutes)
- Super 200 ($200, 60 minutes)

## Business Hours
- Weekdays: 8:00 AM - 6:00 PM
- Weekends: 9:00 AM - 5:00 PM

## Important Notes
1. **DO NOT modify the following without updating the website code:**
   - Form field IDs
   - Package names in radio buttons
   - Form URL

2. **How to View Bookings:**
   - Check Google Calendar for upcoming appointments
   - View form responses spreadsheet for detailed information
   - Enable email notifications for instant booking alerts

3. **Maintenance Tasks:**
   - Regularly check form responses
   - Archive old responses periodically
   - Update business hours if needed
   - Monitor booking patterns

## Making Changes

### To Update Package Prices:
1. Edit the Google Form
2. Update the website's pricing section
3. Update the constants in `booking.js`

### To Update Business Hours:
1. Modify the BUSINESS_HOURS object in the website code
2. Update the form description
3. Update any business listings (Google Business, etc.)

## Technical Support
If you need to make changes to:
- Form field IDs
- Integration settings
- Website code

Please contact a developer as these changes require technical expertise.

## Emergency Contacts
- Website Developer: [Your Contact Info]
- Google Workspace Support: https://support.google.com/a/answer/1047213

## Backup Procedures
1. Regularly export form responses to spreadsheet
2. Keep a backup of calendar events
3. Save customer contact information securely

## Privacy & Data Handling
1. Do not share customer information with third parties
2. Regularly clean up old booking data
3. Handle customer information according to privacy laws 