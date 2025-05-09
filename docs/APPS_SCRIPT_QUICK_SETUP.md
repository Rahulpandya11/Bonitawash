# Quick Setup Guide for Apps Script

## First Time Setup

1. **Open Apps Script**
   - Go to script.google.com
   - Open the transferred project
   - Click "Run" > "Run function" > "onFormSubmit"
   - Grant all required permissions

2. **Update Calendar Settings**
   ```javascript
   // In Code.gs, update these lines:
   const CALENDAR_ID = 'your.business@gmail.com'; // Your business calendar
   const TIMEZONE = 'Your/Timezone';              // Your timezone
   ```

3. **Update Email Settings**
   ```javascript
   const BUSINESS_NAME = 'Your Business Name';
   const BUSINESS_PHONE = 'Your Business Phone';
   const BUSINESS_ADDRESS = 'Your Business Address';
   ```

4. **Set Up Triggers**
   1. Click "Triggers" (clock icon)
   2. Click "Add Trigger"
   3. Choose:
      - Function: onFormSubmit
      - Event source: From form
      - Event type: On form submit

## Testing the Setup

1. **Submit Test Booking**
   - Fill out the booking form
   - Use test data (e.g., "TEST - Your Name")

2. **Check Results**
   - Open your Google Calendar
   - Look for test event
   - Check your email for confirmation
   - Check customer's email

3. **View Logs**
   - In Apps Script, click "View" > "Execution log"
   - Check for any errors

## Common Issues

1. **Calendar Event Not Creating**
   - Check Calendar API is enabled
   - Verify calendar ID is correct
   - Check permissions

2. **Emails Not Sending**
   - Check Gmail API is enabled
   - Verify email addresses
   - Check spam folder

3. **Form Not Triggering**
   - Check trigger is set up
   - Verify form ownership
   - Test permissions

## Daily Operations

1. **Monitor**
   - Check Apps Script dashboard daily
   - Review error notifications
   - Monitor calendar syncing

2. **Maintain**
   - Keep calendar clean
   - Archive old bookings
   - Update business hours as needed

## Emergency Steps

If the system stops working:
1. Check execution logs
2. Verify APIs are enabled
3. Test trigger manually
4. Contact support if needed

## Support Resources
- Google Apps Script Documentation: https://developers.google.com/apps-script
- Calendar API Documentation: https://developers.google.com/calendar
- Forms API Documentation: https://developers.google.com/forms 