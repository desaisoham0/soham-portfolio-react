import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {

  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_OWNER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 1) Confirmation to the sender
    await transporter.sendMail({
      from: `"Soham Desai" <${process.env.EMAIL_OWNER}>`,
      to: email,
      replyTo: process.env.EMAIL_OWNER,
      subject: 'Thank you for contacting me',
      text: `Dear sender,\n\nThank you for reaching out.\n\nMessage:\n${message}\n\nBest regards,\nSoham Desai`,
    });

    // 2) Notification to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${email}>`,
      to: process.env.EMAIL_OWNER,
      subject: 'New Portfolio Contact Message',
      text: `New message from: ${email}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
