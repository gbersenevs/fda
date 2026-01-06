import { NextRequest, NextResponse } from "next/server";

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

    // Send via Web3Forms
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY not configured");
      // Still return success for development
      console.log("📧 Form submission (no Web3Forms key):", data);
      return NextResponse.json({ success: true });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `FDA SERVICE: New inquiry from ${data.name}`,
        from_name: "FDA SERVICE Website",
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        phone: data.phone || "Not provided",
        service_type: data.serviceType,
        message: data.message,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    console.log("✅ Form submitted successfully via Web3Forms");
    
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
