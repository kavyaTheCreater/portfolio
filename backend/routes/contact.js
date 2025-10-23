const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST route to handle contact form submissions
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      error: 'All fields are required' 
    });
  }

  try {
    // Create a transporter (configure with your email service)
    // For Gmail, you'll need to enable "Less secure app access" or use App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password or app password
      }
    });

    // Email to yourself (receiving the contact form)
    const mailOptionsToSelf = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Confirmation email to the sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Kavyashree M R</p>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToSelf);
    await transporter.sendMail(mailOptionsToSender);

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: error.message 
    });
  }
});

module.exports = router;