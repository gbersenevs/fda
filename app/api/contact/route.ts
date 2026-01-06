import { NextRequest, NextResponse } from "next/server";

// Contact form submission types
interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.serviceType || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ============================================
    // OPTION 1: Send to Google Sheets (recommended for simplicity)
    // ============================================
    // Set GOOGLE_SHEETS_WEBHOOK_URL in your environment variables
    // You can create a Google Apps Script web app to receive this data
    // See instructions below
    
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to save to Google Sheets");
      }
    }

    // ============================================
    // OPTION 2: Send email via Resend
    // ============================================
    // Set RESEND_API_KEY and CONTACT_EMAIL in environment variables
    
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FDA SERVICE Website <noreply@fdaservice.lv>",
          to: process.env.CONTACT_EMAIL,
          subject: `New Contact Form: ${data.serviceType} - ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong>Service Type:</strong> ${data.serviceType}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send email via Resend");
      }
    }

    // ============================================
    // OPTION 3: Web3Forms (simplest - no server needed)
    // ============================================
    // Set WEB3FORMS_ACCESS_KEY in environment variables
    // Get your free key at https://web3forms.com
    
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: `FDA SERVICE: New inquiry from ${data.name}`,
          from_name: data.name,
          ...data,
        }),
      });

      if (!web3Response.ok) {
        throw new Error("Failed to submit via Web3Forms");
      }
    }

    // Log submission for debugging (remove in production if not needed)
    console.log("📧 Contact form submission:", {
      name: data.name,
      email: data.email,
      serviceType: data.serviceType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully" 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}

