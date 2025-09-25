# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello aeloria collective,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Service: {{service}}
Message: {{message}}

Best regards,
Contact Form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Your Website
Replace these placeholders in your script.js file:

- Replace `YOUR_PUBLIC_KEY` with your actual public key
- Replace `YOUR_SERVICE_ID` with your service ID
- Replace `YOUR_TEMPLATE_ID` with your template ID

## Step 6: Test
1. Deploy your updated website
2. Fill out the contact form
3. Check your email for the message

## Free Plan Limits
- 200 emails per month
- Perfect for small businesses
- No credit card required
