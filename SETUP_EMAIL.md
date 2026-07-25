# Email Setup Instructions

The contact form is configured to send submissions to **Scalesharkweb@gmail.com** using Web3Forms.

## Quick Setup (Free - 2 minutes)

1. **Get your Web3Forms Access Key:**
   - Go to [https://web3forms.com](https://web3forms.com)
   - Click "Create Access Key" (no signup required for free tier)
   - Enter your email: **Scalesharkweb@gmail.com**
   - Copy the access key they provide

2. **Add the Access Key to your code:**
   - Open `src/routes/contact.tsx`
   - Find line 111: `formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

3. **Test the form:**
   - Run your website locally or deploy it
   - Fill out the contact form
   - Check your **Scalesharkweb@gmail.com** inbox for the submission

## What You'll Receive

When someone submits the contact form, you'll receive an email with:
- **Subject:** New Project Inquiry from [Name]
- **From:** ScaleShark Website
- **Content includes:**
  - Name
  - Company
  - Email address
  - Project type
  - Budget range
  - Timeline
  - Project description

## Alternative: Environment Variable (Recommended for Production)

For better security, you can use an environment variable:

1. Create a `.env` file in your project root:
   ```
   VITE_WEB3FORMS_KEY=your_actual_access_key_here
   ```

2. Update line 111 in `src/routes/contact.tsx`:
   ```typescript
   formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");
   ```

3. Add `.env` to your `.gitignore` (if not already there)

4. For deployment (Vercel/Netlify), add the environment variable in your hosting dashboard

## Features Included

✅ Sends to: Scalesharkweb@gmail.com
✅ Free tier: 250 submissions/month
✅ No backend required
✅ Spam protection included
✅ Instant email notifications
✅ Works on all hosting platforms

## Need Help?

- Web3Forms Documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Contact via WhatsApp: +33 6 50 98 69 94
