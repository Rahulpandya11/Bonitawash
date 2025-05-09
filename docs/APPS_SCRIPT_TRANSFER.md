# Apps Script Transfer Guide

## 1. Transfer Ownership
1. Open the Apps Script project
2. Click on the "Share" button in the top right
3. Add owner's Google account with "Editor" access
4. Transfer ownership:
   - Click the settings icon (⚙️) next to their email
   - Select "Make owner"
   - Confirm the transfer

## 2. Script Configuration
Ensure these triggers are set up:
- Form Submit trigger for `onFormSubmit` function
- Time-based trigger for any cleanup functions

## 3. Required Settings
1. **Calendar Access**
   ```javascript
   // Owner needs to update this with their calendar ID
   const CALENDAR_ID = 'your.email@gmail.com';
   ```

2. **Email Settings**
   ```javascript
   // Update email addresses for notifications
   const OWNER_EMAIL = 'owner@email.com';
   const NOTIFICATION_EMAIL = 'notifications@email.com';
   ```

## 4. Important Notes
1. The owner must:
   - Be logged into their Google account
   - Have Google Calendar API enabled
   - Have permissions to create calendar events
   - Have permissions to send emails

2. Testing After Transfer:
   - Submit a test booking
   - Check calendar event creation
   - Verify email notifications
   - Test error handling

## 5. Backup Current Script
```javascript
function onFormSubmit(e) {
  try {
    // Get form response
    const response = e.response;
    const itemResponses = response.getItemResponses();
    const timestamp = response.getTimestamp();
    
    // Initialize booking data
    const bookingData = {
      ownerName: '',
      contactNumber: '',
      carNumber: '',
      carModel: '',
      package: '',
      date: '',
      time: ''
    };

    // Map responses to booking data
    itemResponses.forEach(item => {
      const question = item.getItem().getTitle();
      const answer = item.getResponse();
      
      switch(question) {
        case 'Owner Name':
          bookingData.ownerName = answer;
          break;
        case 'Contact Number':
          bookingData.contactNumber = answer;
          break;
        case 'Package':
          bookingData.package = answer;
          break;
        // ... other fields
      }
    });

    // Create calendar event
    createCalendarEvent(bookingData);
    
    // Send confirmation emails
    sendConfirmationEmail(bookingData);
    
  } catch(error) {
    sendErrorNotification(error);
  }
}
```

## 6. Permissions Checklist
- [ ] Calendar API enabled
- [ ] Gmail API enabled (if using email features)
- [ ] Form trigger permissions granted
- [ ] Calendar access permissions granted
- [ ] Email sending permissions configured

## 7. Troubleshooting Access
If the owner encounters permission issues:
1. Go to Google Cloud Console
2. Enable required APIs
3. Grant necessary OAuth scopes
4. Run test function to authorize

## 8. Emergency Contacts
Keep contact information for:
- Previous owner/developer
- Google Workspace admin
- Technical support contact

## 9. Regular Maintenance
Owner should:
- Check error logs weekly
- Test form submission monthly
- Update calendar settings as needed
- Monitor email notifications 