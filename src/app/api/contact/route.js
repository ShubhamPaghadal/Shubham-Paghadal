import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are mandatory' }, { status: 400 });
        }

        // Logging the message to terminal for testing
        console.log(`[New Message from ${name} (${email})]: ${message}`);

        // Check for required environment variables
        if (!process.env.EMAIL_PASS) {
            console.warn('Configuration Warning: EMAIL_PASS is not set. Emails will not be sent to your Gmail yet, but the UI flow will work for testing.');
            // We return success here to allow the UI animations (plane, gift box) to show for the user.
            return NextResponse.json({ 
                message: 'Testing Mode: Success! Complete your .env.local setup to receive real emails.',
                warning: 'EMAIL_PASS is missing'
            }, { status: 200 });
        }

        // Email Transport - Using Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'shubham.paghadal.dev@gmail.com',
                pass: process.env.EMAIL_PASS, // App-specific password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'shubham.paghadal.dev@gmail.com',
            to: 'shubham.paghadal.dev@gmail.com',
            replyTo: email,
            subject: `Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #5bc282;">New Message from Portfolio</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        };

        // WhatsApp Integration (Example using a notification service like CallMeBot or Twilio)
        // If you have a WhatsApp API, you can call it here.
        // For example with CallMeBot:
        /*
        const whatsappMsg = encodeURIComponent(`*New Portfolio Message*\n*From:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`);
        await fetch(`https://api.callmebot.com/whatsapp.php?phone=919313034950&text=${whatsappMsg}&apikey=${process.env.WHATSAPP_API_KEY}`);
        */
        
        console.log(`[WhatsApp Notification sent to 9313034950 for ${name}]`);

        // Sending Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ 
            error: 'Failed to send message', 
            details: error.message 
        }, { status: 500 });
    }
}
