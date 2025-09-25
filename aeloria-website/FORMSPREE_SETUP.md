# Formspree Setup Guide (Easier Option)

## Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Click "Get Started" 
3. Sign up with your email
4. Verify your email address

## Step 2: Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Give it a name like "aeloria-contact"
3. Copy the form endpoint URL (looks like: https://formspree.io/f/xxxxxxxxxx)

## Step 3: Update Your Website
1. Open your `index.html` file
2. Find this line: `action="https://formspree.io/f/YOUR_FORM_ID"`
3. Replace `YOUR_FORM_ID` with your actual form ID from step 2

## Step 4: Test
1. Deploy your website
2. Fill out the contact form
3. Check your email for the message

## Benefits of Formspree:
- ✅ **Free Plan**: 50 submissions per month
- ✅ **No Code Required**: Just replace the form action URL
- ✅ **Instant Setup**: Works immediately
- ✅ **Spam Protection**: Built-in spam filtering
- ✅ **Email Notifications**: Get notified of new submissions

## Example:
If your form endpoint is `https://formspree.io/f/xpzgkqyw`, update your HTML to:
```html
<form class="contact-form" action="https://formspree.io/f/xpzgkqyw" method="POST">
```

That's it! Your contact form will now work and send emails to you.
