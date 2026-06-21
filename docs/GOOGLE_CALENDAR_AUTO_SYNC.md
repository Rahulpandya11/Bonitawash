# Automatic Google Calendar Integration

## 🗓️ Auto-Add Bookings to Google Calendar

This Google Apps Script automatically adds booking emails to your Google Calendar - no manual clicking needed!

---

## 📋 Setup Steps (5 minutes)

### Step 1: Create the Script

1. Go to **[script.google.com](https://script.google.com)**
2. Click **+ New Project**
3. Delete any default code
4. Copy and paste the script below
5. Click **💾 Save** (name it "Bonita Calendar Sync")

---

## 📜 The Script (Copy This Entire Code):

```javascript
function checkEmailsAndAddToCalendar() {
  // Search for unread booking emails
  const searchQuery = 'from:bonitacarwash27x7@gmail.com subject:"New Booking Request" is:unread';
  const threads = GmailApp.search(searchQuery, 0, 50);
  
  if (threads.length === 0) {
    console.log('No new booking emails found');
    return;
  }
  
  console.log(`Found ${threads.length} new booking email(s)`);
  
  threads.forEach(thread => {
    const messages = thread.getMessages();
    
    messages.forEach(message => {
      const body = message.getPlainBody();
      const subject = message.getSubject();
      
      console.log(`Processing email: ${subject}`);
      
      // Extract booking details from email
      const ownerName = extractValue(body, 'Owner Name:') || extractValue(body, 'owner_name');
      const contactNumber = extractValue(body, 'Contact Number:') || extractValue(body, 'contact_number');
      const email = extractValue(body, 'Email:') || extractValue(body, 'email:');
      const carModel = extractValue(body, 'Car Model:') || extractValue(body, 'car_model');
      const carNumber = extractValue(body, 'Car Number:') || extractValue(body, 'car_number');
      const packageName = extractValue(body, 'Package:') || extractValue(body, 'package_name');
      const bookingDate = extractValue(body, '📅 Date:') || extractValue(body, 'Date:') || extractValue(body, 'booking_date');
      const bookingTime = extractValue(body, '🕐 Time:') || extractValue(body, 'Time:') || extractValue(body, 'booking_time');
      const notes = extractValue(body, 'Additional Notes:') || extractValue(body, 'additional_notes') || 'None';
      
      console.log(`Extracted: ${ownerName}, ${bookingDate}, ${bookingTime}`);

      // Validate required fields
      if (!ownerName || !bookingDate || !bookingTime) {
        console.log('Missing required fields - skipping this email');
        message.markRead(); // Mark as read to avoid reprocessing
        return;
      }

      try {
        // Parse date and time
        let startDateTime;
        
        // Try to parse the date in various formats
        if (bookingDate.includes('/')) {
          // Format: MM/DD/YYYY or DD/MM/YYYY
          const parts = bookingDate.split('/');
          const dateStr = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
          startDateTime = new Date(`${dateStr}T${convertTo24Hour(bookingTime)}`);
        } else if (bookingDate.includes('-')) {
          // Format: YYYY-MM-DD
          startDateTime = new Date(`${bookingDate}T${convertTo24Hour(bookingTime)}`);
        } else {
          // Try direct parse
          startDateTime = new Date(`${bookingDate} ${bookingTime}`);
        }

        // Validate the date
        if (isNaN(startDateTime.getTime())) {
          console.log(`Invalid date/time: ${bookingDate} ${bookingTime}`);
          message.markRead();
          return;
        }

        // Set event duration to 2 hours
        const endDateTime = new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000);

        // Get default calendar
        const calendar = CalendarApp.getDefaultCalendar();
        
        // Create event title
        const eventTitle = `🚗 ${packageName} - ${ownerName}`;
        
        // Create detailed description
        const eventDescription = `
BOOKING DETAILS
===============

Customer Information:
• Name: ${ownerName}
• Phone: ${contactNumber}
• Email: ${email}

Vehicle Information:
• Car Model: ${carModel}
• Car Number/Plate: ${carNumber}

Service:
• Package: ${packageName}

Additional Notes:
${notes}

---
Booking received: ${new Date().toLocaleString()}
        `.trim();

        // Check for duplicate events on the same day
        const existingEvents = calendar.getEventsForDay(startDateTime);
        const duplicate = existingEvents.find(e => 
          e.getTitle() === eventTitle && 
          Math.abs(e.getStartTime() - startDateTime) < 1000 * 60 * 5 // Within 5 minutes
        );
        
        if (duplicate) {
          console.log(`Duplicate event found for ${ownerName} - skipping`);
        } else {
          // Create calendar event
          const event = calendar.createEvent(eventTitle, startDateTime, endDateTime, {
            description: eventDescription,
            location: 'Bonita Car Wash',
            sendInvites: false
          });
          
          // Set reminder - 1 day before and 1 hour before
          event.removeAllReminders();
          event.addEmailReminder(24 * 60); // 1 day before
          event.addPopupReminder(60);      // 1 hour before
          
          console.log(`✅ Calendar event created: ${eventTitle} on ${startDateTime.toLocaleString()}`);
        }

        // Mark email as read so we don't process it again
        message.markRead();
        
      } catch (e) {
        console.error(`Error processing booking: ${e.message}`);
        console.error(e.stack);
        // Don't mark as read so we can retry
      }
    });
  });
  
  console.log('Finished processing emails');
}

// Helper function to extract values from email body
function extractValue(body, label) {
  // Try exact match first
  const regex1 = new RegExp(label + '\\s*([^\\n]+)', 'i');
  const match1 = body.match(regex1);
  if (match1 && match1[1].trim()) {
    return match1[1].trim();
  }
  
  // Try template variable format {{variable}}
  const varName = label.replace(/[:\s]/g, '').toLowerCase();
  const regex2 = new RegExp(`\\{\\{${varName}\\}\\}\\s*([^\\n]+)`, 'i');
  const match2 = body.match(regex2);
  if (match2 && match2[1].trim()) {
    return match2[1].trim();
  }
  
  return null;
}

// Helper function to convert 12-hour time to 24-hour format
function convertTo24Hour(timeStr) {
  if (!timeStr) return '00:00';
  
  timeStr = timeStr.trim().toUpperCase();
  
  // If already in 24-hour format (HH:MM or HH:MM:SS)
  if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(timeStr)) {
    return timeStr;
  }
  
  // Parse 12-hour format with AM/PM
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) {
    console.log(`Could not parse time: ${timeStr}`);
    return '00:00';
  }
  
  let [_, hours, minutes, period] = match;
  hours = parseInt(hours);
  
  // Convert to 24-hour
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

// Test function - run this manually to test one email
function testScript() {
  console.log('=== Testing Script ===');
  checkEmailsAndAddToCalendar();
  console.log('=== Test Complete - Check logs above ===');
}
```

---

## ⚙️ Step 2: Set Up Automatic Trigger

1. In the script editor, click the **⏰ Clock icon** (Triggers) on the left sidebar
2. Click **+ Add Trigger** (bottom right corner)
3. Configure the trigger:
   - **Choose which function to run:** `checkEmailsAndAddToCalendar`
   - **Choose which deployment should run:** `Head`
   - **Select event source:** `Time-driven`
   - **Select type of time based trigger:** `Minutes timer`
   - **Select minute interval:** `Every 5 minutes`
4. Click **Save**

### Grant Permissions:

- You'll be asked to authorize the script
- Click **Review Permissions**
- Choose your Google account (bonitacarwash27x7@gmail.com)
- Click **Advanced** → **Go to Bonita Calendar Sync (unsafe)**
- Click **Allow**

---

## ✅ Step 3: Test It!

### Manual Test:
1. In the script editor, select the function **`testScript`** from the dropdown at the top
2. Click **▶ Run**
3. Check **View → Logs** to see what happened
4. Go to your Google Calendar - if there are any unread booking emails, they should appear!

### Live Test:
1. Submit a test booking from your website
2. Wait up to 5 minutes
3. Check your Google Calendar
4. The booking should appear automatically! 🎉

---

## 📅 What Gets Added to Your Calendar:

**Event Title:**  
`🚗 [Package Name] - [Customer Name]`

**Event Time:**  
Customer's selected date and time (2-hour block)

**Location:**  
Bonita Car Wash

**Description:**  
```
BOOKING DETAILS
===============

Customer Information:
• Name: John Doe
• Phone: (555) 123-4567
• Email: john@example.com

Vehicle Information:
• Car Model: Toyota Camry 2020
• Car Number/Plate: ABC-1234

Service:
• Package: VIP WASH - $31.95

Additional Notes:
Please wash carefully

---
Booking received: [timestamp]
```

**Reminders:**
- 📧 Email reminder: 1 day before
- 🔔 Popup reminder: 1 hour before

---

## 🔍 Troubleshooting

### No events appearing in calendar?

1. **Check execution logs:**
   - In script editor: **View → Executions**
   - Look for errors or "No new booking emails found"

2. **Check email search:**
   - Open Gmail
   - Search: `subject:"New Booking Request" is:unread`
   - Are there any unread booking emails?

3. **Test manually:**
   - Run the `testScript` function
   - Check logs for errors

### Events are duplicated?

- The script checks for duplicates within 5 minutes of the same time
- If you run the script manually multiple times, mark emails as read first

### Wrong date/time in calendar?

- Check your Google Calendar timezone settings
- The script uses your account's default timezone

---

## 🎯 Benefits:

✅ **100% Automatic** - No manual work needed  
✅ **Works 24/7** - Checks every 5 minutes  
✅ **No Duplicates** - Smart duplicate detection  
✅ **Email Reminders** - Get notified 1 day before  
✅ **Popup Reminders** - Get notified 1 hour before  
✅ **All Details** - Customer info in event description  
✅ **Easy to Manage** - Standard Google Calendar event  

---

## 🔧 Advanced: Customize the Script

### Change event duration:
Find this line:
```javascript
const endDateTime = new Date(startDateTime.getTime() + 2 * 60 * 60 * 1000);
```
Change `2` to desired hours (e.g., `1` for 1 hour, `3` for 3 hours)

### Change reminder times:
Find these lines:
```javascript
event.addEmailReminder(24 * 60); // 1 day before
event.addPopupReminder(60);      // 1 hour before
```
Change the numbers (in minutes)

### Change check frequency:
In triggers, change from "Every 5 minutes" to:
- Every 10 minutes (less frequent)
- Every minute (more frequent, but may hit quota limits)

---

## 📊 Quota Limits (Free Google Account):

- **Email read operations:** 20,000/day (more than enough)
- **Calendar operations:** 10,000/day (plenty)
- **Script runtime:** 6 minutes per execution
- **Triggers:** 20 time-based triggers per user

You're well within limits! ✅

---

**Setup Complete!** 🎉

Your bookings will now automatically appear in Google Calendar within 5 minutes of receiving the email!
