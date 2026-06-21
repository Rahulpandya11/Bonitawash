# Update Your EmailJS Template - Add Calendar Integration

## 🗓️ Add Calendar Buttons to Your Email

To enable automatic calendar addition, update your EmailJS email template with the new HTML below.

## Steps:

1. Go to https://www.emailjs.com/
2. Login to your account
3. Go to **Email Templates**
4. Click on your booking template (`template_am7vx4g`)
5. Replace the **entire email body** with the updated HTML below

---

## Updated Email Template HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
        .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; }
        .label { font-weight: bold; color: #1e3a8a; display: inline-block; width: 150px; }
        .value { color: #333; }
        .calendar-section { background: #eff6ff; padding: 25px; margin: 20px 0; border-radius: 10px; text-align: center; border: 2px solid #3b82f6; }
        .calendar-buttons { display: flex; gap: 15px; justify-content: center; margin-top: 15px; flex-wrap: wrap; }
        .calendar-btn { display: inline-block; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 600; color: white !important; transition: transform 0.2s; }
        .google-btn { background: #4285f4; }
        .outlook-btn { background: #0078d4; }
        .calendar-btn:hover { transform: translateY(-2px); }
        .footer { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚗 New Booking Request</h1>
            <p>A customer has submitted a booking request</p>
        </div>
        
        <div class="content">
            <!-- Calendar Section - IMPORTANT -->
            <div class="calendar-section">
                <h3 style="color: #1e3a8a; margin-top: 0;">📅 Add to Your Calendar</h3>
                <p style="color: #1e40af; margin: 10px 0;">Click below to automatically add this booking to your calendar:</p>
                <div class="calendar-buttons">
                    <a href="{{google_calendar_link}}" class="calendar-btn google-btn" target="_blank">
                        + Google Calendar
                    </a>
                    <a href="{{outlook_calendar_link}}" class="calendar-btn outlook-btn" target="_blank">
                        + Outlook Calendar
                    </a>
                </div>
            </div>
            
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Customer Details</h2>
            
            <div class="info-row">
                <span class="label">Owner Name:</span>
                <span class="value">{{owner_name}}</span>
            </div>
            
            <div class="info-row">
                <span class="label">Contact Number:</span>
                <span class="value">{{contact_number}}</span>
            </div>
            
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">{{email}}</span>
            </div>
            
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 30px;">Vehicle Details</h2>
            
            <div class="info-row">
                <span class="label">Car Model:</span>
                <span class="value">{{car_model}}</span>
            </div>
            
            <div class="info-row">
                <span class="label">Car Number:</span>
                <span class="value">{{car_number}}</span>
            </div>
            
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 30px;">Booking Details</h2>
            
            <div class="info-row">
                <span class="label">Package:</span>
                <span class="value">{{package_name}}</span>
            </div>
            
            <div class="info-row" style="background: #fef3c7; border-left: 4px solid #f59e0b;">
                <span class="label">📅 Date:</span>
                <span class="value" style="font-weight: 600; font-size: 1.1em;">{{booking_date}}</span>
            </div>
            
            <div class="info-row" style="background: #fef3c7; border-left: 4px solid #f59e0b;">
                <span class="label">🕐 Time:</span>
                <span class="value" style="font-weight: 600; font-size: 1.1em;">{{booking_time}}</span>
            </div>
            
            <div class="info-row">
                <span class="label">Additional Notes:</span>
                <span class="value">{{additional_notes}}</span>
            </div>
            
            <div class="info-row">
                <span class="label">Car Photos:</span>
                <span class="value">{{photos_info}}</span>
            </div>
            
            <div class="info-row" style="background: #eff6ff; border-left: 4px solid #3b82f6;">
                <span class="label">Submitted:</span>
                <span class="value">{{submission_date}}</span>
            </div>
        </div>
        
        <div class="footer">
            <p>📧 Booking System | Bonita Car Wash</p>
            <p style="font-size: 12px; opacity: 0.8;">This is an automated message from your booking system</p>
        </div>
    </div>
</body>
</html>
```

---

## ✅ After Updating:

1. Click **Save** in EmailJS
2. Send a test booking from your website
3. Check your email
4. Click the **"+ Google Calendar"** or **"+ Outlook Calendar"** button
5. The booking will be automatically added to your calendar!

---

## 📅 Calendar Event Details:

The calendar event will include:
- **Title:** Car Wash - [Package Name]
- **Date/Time:** Customer's selected date and time
- **Duration:** 2 hours (automatically set)
- **Location:** Bonita Car Wash
- **Description:** All customer and booking details

---

## 🎯 Benefits:

✅ **One Click** - Add booking to calendar instantly  
✅ **Automatic Reminders** - Your calendar will remind you  
✅ **All Details** - Customer info included in calendar event  
✅ **Works with Gmail** - If viewing in Gmail, click and it's added!  
✅ **Works with Outlook** - Outlook users can add too  

---

**Setup Complete! Test it now.** 🚀
