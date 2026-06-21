# EmailJS Setup Guide for Booking Form

## Overview
This guide will help you set up EmailJS to receive booking emails directly to `bonitacarwash27x7@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Create an account using any email (doesn't have to be your business email)

## Step 2: Add Email Service

1. Once logged in, go to **Email Services** from the sidebar
2. Click **Add New Service**
3. Choose **Gmail** as the service provider
4. Click **Connect Account** and sign in with `bonitacarwash27x7@gmail.com`
5. Give the service a name (e.g., "Bonita Booking Notifications")
6. Click **Create Service**
7. **Copy the Service ID** (something like `service_abc123`) - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates** from the sidebar
2. Click **Create New Template**
3. Use this template content:

### Template Settings:
- **Template Name**: Booking Confirmation

### Email Subject:
```
New Booking Request - {{package_name}}
```

### Email Body (use this exact format):
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
            
            <div class="info-row">
                <span class="label">Preferred Date:</span>
                <span class="value">{{booking_date}}</span>
            </div>
            
            <div class="info-row">
                <span class="label">Preferred Time:</span>
                <span class="value">{{booking_time}}</span>
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

4. **To Email**: Set to `bonitacarwash27x7@gmail.com`
5. **From Name**: Set to `{{owner_name}}`
6. **Reply To**: Set to `{{email}}`
7. Click **Save**
8. **Copy the Template ID** (something like `template_xyz789`) - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** from the sidebar
2. Click on **General** tab
3. Find **Public Key** section
4. **Copy the Public Key** (something like `Ab12Cd34Ef56Gh78`)

## Step 5: Configure the Application

Now update the file: `src/config/emailConfig.js`

```javascript
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',     // Paste from Step 4
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',      // Paste from Step 2
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'     // Paste from Step 3
};
```

Example (with actual IDs):
```javascript
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'Ab12Cd34Ef56Gh78',
    SERVICE_ID: 'service_bonita123',
    TEMPLATE_ID: 'template_booking456'
};
```

## Step 6: Update BookingModal.js

Open `src/components/utils/BookingModal.js` and update these lines:

Find line ~66:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
```
Replace with:
```javascript
import { EMAILJS_CONFIG } from '../../config/emailConfig';
// ... then in the handleSubmit function:
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
```

Find lines ~89-90:
```javascript
const response = await emailjs.send(
    'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
    templateParams
);
```
Replace with:
```javascript
const response = await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams
);
```

## Step 7: Test the Integration

1. Start your development server: `npm start`
2. Open the website
3. Click any "Book This Package" button
4. Fill in the form with test data
5. Submit the form
6. Check `bonitacarwash27x7@gmail.com` inbox for the booking email

## Troubleshooting

### Email Not Received?
1. Check EmailJS Dashboard -> Logs to see if the email was sent
2. Check your spam/junk folder
3. Verify all IDs are correctly copied (no extra spaces)
4. Make sure you're under the free tier limit (200 emails/month)

### Form Not Submitting?
1. Open browser console (F12) and check for errors
2. Verify EmailJS credentials are correct
3. Check internet connection

### Photos Not Showing?
Note: EmailJS has a 50KB limit per email. Photos are sent as references in the email body, not as actual attachments. For full photo support, consider upgrading EmailJS or using a file storage service.

## Email Delivery Limits

**EmailJS Free Tier:**
- 200 emails per month
- 50KB per email
- No credit card required

**If you need more:**
- Personal Plan: $15/month (1,000 emails)
- Professional Plan: $35/month (10,000 emails)

## Security Notes

✅ **Safe to commit**: The public key, service ID, and template ID can be in your repository
❌ **Never commit**: Gmail password or any private keys (you don't need to - EmailJS handles authentication)

## Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Setup Complete! 🎉**

Your booking form will now send emails directly to your Gmail inbox.
