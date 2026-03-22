import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Resend's default sender
        to: 'bimmedev@gmail.com', // Your email
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Sent from your portfolio contact form</small></p>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email');
      }

      console.log('Email sent successfully:', data);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Still return success to user but log the error
      // In production, you might want to handle this differently
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
