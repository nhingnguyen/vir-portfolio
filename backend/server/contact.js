const express = require('express');
const router = express.Router();
const { transporter } = require('../config/Email.js');

router.post('/send-contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const ownerNotificationOptions = {
      to: 'lamnhi.ngngoc@gmail.com',
      subject: `New Message From ${name} - Portfolio Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Contact Form Submission</h2>
          <p>You have received a new message from your portfolio website:</p>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p style="font-size: 0.9em; color: #6c757d;">This message was sent from your portfolio contact form.</p>
        </div>
      `
    };

    const userConfirmationOptions = {
      to: email,
      subject: 'Thank You for Contacting Me',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">Thank You for Reaching Out!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          
          <p>Here's a copy of your message for your reference:</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p>Best regards,<br>Ngoc Lam Nhi Nguyen</p>
          
          <hr style="border: none; border-top: 1px solid #e9ecef; margin: 20px 0;">
          
          <p style="font-size: 0.9em; color: #6c757d;">
            This is an automated message. Please do not reply directly to this email.
          </p>
        </div>
      `,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'High'
      }
    };

    await transporter.sendMail(ownerNotificationOptions);
    await transporter.sendMail(userConfirmationOptions);

    res.status(200).json({ 
      success: true,
      message: 'Your message has been sent successfully!' 
    });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ 
      success: false,
      error: 'An error occurred while sending your message. Please try again later.' 
    });
  }
});

module.exports = router;