/**
 * KUBER Ltd Site Configuration
 * 
 * This file contains all company information, content, and copy.
 * Edit this file to update website content without touching components.
 */

export const siteConfig = {
  // Company Information
  company: {
    name: "KUBER Ltd",
    legalName: 'SIA "KUBER Ltd"',
    registrationNumber: "50103631631",
    address: {
      street: "Lienes iela 16",
      city: "Rīga",
      postalCode: "LV-1009",
      country: "Latvia",
      full: "Lienes iela 16, Rīga, LV-1009, Latvia",
    },
    phone: "+371 26197936",
    email: "info@kuber.lv",
    positioning: "Facility support services and cleaning in Riga",
    establishedYear: 2013,
    trustLine: "Established in 2013",
    
    // Optional fields for future use
    workingHours: "Monday - Friday: 8:00 - 18:00",
    industriesServed: [
      "Commercial offices",
      "Residential buildings",
      "Retail spaces",
      "Public institutions",
    ],
    serviceAreas: ["Riga", "Riga region"],
  },

  // SEO Defaults
  seo: {
    siteName: "KUBER Ltd",
    defaultTitle: "KUBER Ltd - Professional Facility Services in Riga",
    defaultDescription:
      "Professional cleaning and facility support services for businesses in Riga. Daily cleaning, general cleaning, and facility maintenance.",
    locale: "en_LV",
    type: "website",
  },

  // Navigation
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      {
        label: "Services",
        href: "/services",
        children: [
          { label: "Daily cleaning", href: "/services/daily-cleaning" },
          { label: "General cleaning", href: "/services/general-cleaning" },
          { label: "Facility support", href: "/services/facility-support" },
        ],
      },
      { label: "Contacts", href: "/contact" },
    ],
    languages: [
      { code: "en", label: "EN" },
      { code: "lv", label: "LV" },
    ],
  },

  // Home Page Content
  home: {
    hero: {
      headline: "Professional facility services for your business",
      subheadline:
        "Reliable cleaning and facility support solutions tailored to your operational needs. Focus on your business while we handle the rest.",
      primaryCta: { label: "Request a quote", href: "/contact" },
      secondaryCta: { label: "View services", href: "/services" },
    },
    mission: {
      title: "Mission",
      content:
        "To take the burden of cleaning and facility maintenance off our clients' shoulders, delivering consistent, reliable service that allows them to focus on their core business activities.",
    },
    vision: {
      title: "Vision",
      bullets: [
        "Build long-term partnerships based on trust and operational excellence",
        "Continuously improve our processes and service delivery standards",
      ],
      expandedContent:
        "We aim to be the preferred facility services partner for businesses in Riga, recognized for our reliability, professionalism, and commitment to quality. Our vision extends beyond simple service delivery to becoming an integral part of our clients' operational success.",
    },
    values: {
      title: "Values",
      items: [
        {
          title: "Quality",
          description:
            "We maintain high standards in every task, ensuring consistent results that meet and exceed expectations.",
        },
        {
          title: "Responsibility",
          description:
            "We take ownership of our work and its outcomes, addressing issues promptly and professionally.",
        },
        {
          title: "Reliability",
          description:
            "Our clients can count on us to deliver as promised, on time and without excuses.",
        },
        {
          title: "Transparency",
          description:
            "We communicate openly about our processes, pricing, and any challenges that arise.",
        },
      ],
    },
    services: {
      title: "Services",
      items: [
        {
          title: "Daily cleaning",
          description:
            "Regular maintenance cleaning to keep your premises clean and presentable every day.",
          href: "/services/daily-cleaning",
        },
        {
          title: "General cleaning",
          description:
            "Comprehensive deep cleaning services for thorough maintenance of your facilities.",
          href: "/services/general-cleaning",
        },
        {
          title: "Facility support",
          description:
            "Additional facility maintenance tasks and support services for operational efficiency.",
          href: "/services/facility-support",
        },
      ],
    },
    objects: {
      title: "Objects we serve",
      categories: [
        {
          title: "Offices and business premises",
          items: [
            "Corporate offices",
            "Co-working spaces",
            "Business centers",
            "Banks and financial institutions",
            "IT companies",
          ],
        },
        {
          title: "Residential buildings and common areas",
          items: [
            "Apartment building entrances",
            "Stairwells and corridors",
            "Parking facilities",
            "Common rooms",
            "Outdoor areas",
          ],
        },
        {
          title: "Commercial spaces and public objects",
          items: [
            "Retail stores",
            "Shopping centers",
            "Medical facilities",
            "Educational institutions",
            "Warehouses",
          ],
        },
      ],
    },
    whyChoose: {
      title: "Why choose KUBER",
      items: [
        "Predictable scheduling with consistent service times",
        "Direct communication with dedicated account managers",
        "Regular quality checks and performance reviews",
        "Flexible service agreements adapted to your needs",
        "Clear scope definition with no hidden requirements",
        "Local Riga focus with quick response times",
      ],
    },
    compliance: {
      title: "Compliance and transparency",
      content:
        "KUBER Ltd is a registered Latvian company operating in full compliance with local regulations. We maintain transparent business practices and can provide all necessary documentation upon request.",
      // Placeholders for future certifications
      certifications: [],
      insurance: null,
    },
    cta: {
      title: "Get a service offer",
      content:
        "Contact us to discuss your facility service needs and receive a customized offer.",
      buttonLabel: "Contact us",
      buttonHref: "/contact",
    },
  },

  // About Page Content
  about: {
    hero: {
      title: "About KUBER Ltd",
      subtitle: "Professional facility services since 2013",
    },
    highlights: [
      "Professional service delivery with trained personnel",
      "Clear processes and defined responsibilities",
      "Quality control and accountability at every level",
      "Client-focused communication and responsiveness",
    ],
    overview: {
      title: "Who we are",
      paragraphs: [
        "KUBER Ltd is a Latvian facility services company based in Riga. We specialize in providing cleaning and facility support services to businesses, residential buildings, and commercial properties.",
        "Since our establishment in 2013, we have focused on building lasting relationships with our clients through reliable service delivery and professional approach to facility management.",
      ],
    },
    howWeWork: {
      title: "How we work",
      steps: [
        {
          number: 1,
          title: "Needs assessment",
          description:
            "We evaluate your premises and understand your specific requirements.",
        },
        {
          number: 2,
          title: "Scope and schedule",
          description:
            "We define the service scope, frequency, and create a detailed schedule.",
        },
        {
          number: 3,
          title: "Service delivery",
          description:
            "Our trained team executes the agreed services consistently and professionally.",
        },
        {
          number: 4,
          title: "Quality checks",
          description:
            "Regular inspections ensure service standards are maintained.",
        },
        {
          number: 5,
          title: "Continuous improvement",
          description:
            "We gather feedback and adjust our approach to better serve your needs.",
        },
      ],
    },
    experience: {
      title: "Experience and trust",
      content:
        "Our approach is built on operational reliability and long-term partnerships. We believe that consistent service delivery and open communication are the foundations of successful business relationships.",
      clientLogosPlaceholder:
        "Client references available upon request. We respect our clients' privacy and provide testimonials only with their explicit consent.",
    },
  },

  // Services Page Content
  services: {
    hero: {
      title: "Services",
      subtitle:
        "Comprehensive facility services tailored to your operational needs",
    },
    intro:
      "We provide a range of cleaning and facility support services designed to maintain your premises in optimal condition. Each service can be customized to match your specific requirements and schedule.",
    pricing: {
      title: "How pricing works",
      content:
        "Our pricing depends on several factors including premises size, service frequency, and specific requirements. We provide detailed offers after an on-site assessment.",
      factors: [
        "Total area to be serviced",
        "Service frequency (daily, weekly, monthly)",
        "Specific requirements and materials",
        "Access conditions and working hours",
      ],
    },
  },

  // Service Detail Pages
  serviceDetails: {
    "daily-cleaning": {
      title: "Daily cleaning",
      subtitle: "Regular maintenance cleaning for consistently clean premises",
      description:
        "Daily cleaning services ensure your workplace remains clean, hygienic, and presentable at all times. Our teams work according to established schedules and checklists to deliver consistent results.",
      included: [
        "Floor cleaning and maintenance",
        "Surface dusting and wiping",
        "Trash removal and bin management",
        "Restroom cleaning and sanitization",
        "Kitchen and break room maintenance",
        "Window sill and accessible surface cleaning",
        "Door handle and touch point sanitization",
      ],
      whoFor: [
        "Office buildings with regular staff presence",
        "Retail spaces with daily customer traffic",
        "Medical facilities requiring daily hygiene maintenance",
        "Educational institutions",
        "Any premises requiring consistent cleanliness",
      ],
      frequency: {
        title: "Typical frequency",
        content:
          "Daily cleaning is typically performed once per workday, either before business hours, during off-peak times, or after hours. The schedule is adjusted to minimize disruption to your operations.",
      },
      qualityControl: {
        title: "Quality control",
        content:
          "We maintain quality through standardized checklists, regular supervisor inspections, and client feedback channels. Any issues are addressed promptly through our direct communication system.",
      },
    },
    "general-cleaning": {
      title: "General cleaning",
      subtitle: "Comprehensive deep cleaning for thorough maintenance",
      description:
        "General cleaning provides thorough, deep cleaning of your premises. This service addresses areas and tasks that are not covered by regular daily cleaning, ensuring complete facility maintenance.",
      included: [
        "Deep floor cleaning and polishing",
        "Comprehensive window cleaning (interior)",
        "Detailed surface and furniture cleaning",
        "Light fixture and vent cleaning",
        "Carpet and upholstery cleaning",
        "Wall and ceiling spot cleaning",
        "Behind and under furniture cleaning",
        "Equipment and appliance exterior cleaning",
      ],
      whoFor: [
        "Offices requiring periodic deep maintenance",
        "Properties preparing for inspections or events",
        "Facilities with accumulated cleaning needs",
        "Post-construction or renovation cleanup",
        "Seasonal cleaning requirements",
      ],
      frequency: {
        title: "Typical frequency",
        content:
          "General cleaning is typically scheduled monthly, quarterly, or as needed depending on premises usage and requirements. Many clients combine regular daily cleaning with periodic general cleaning.",
      },
      qualityControl: {
        title: "Quality control",
        content:
          "Each general cleaning project includes a detailed scope, completion checklist, and sign-off process. We document completed work and address any concerns immediately.",
      },
    },
    "facility-support": {
      title: "Facility support",
      subtitle: "Additional maintenance and support services",
      description:
        "Facility support services complement our cleaning offerings with additional maintenance and operational support tasks. These services help maintain your facilities in optimal working condition.",
      included: [
        "Minor maintenance and repairs coordination",
        "Supply management and restocking",
        "Waste management and recycling coordination",
        "Snow and ice removal coordination",
        "Green plant care and maintenance",
        "Event setup and cleanup support",
        "Emergency response for facility issues",
      ],
      whoFor: [
        "Property managers seeking comprehensive support",
        "Businesses without dedicated facility staff",
        "Multi-tenant buildings requiring coordinated services",
        "Companies seeking to outsource facility operations",
        "Organizations needing flexible support solutions",
      ],
      frequency: {
        title: "Typical frequency",
        content:
          "Facility support services are provided on an as-needed basis or according to scheduled maintenance plans. Service frequency is determined by your specific requirements and facility needs.",
      },
      qualityControl: {
        title: "Quality control",
        content:
          "We maintain detailed logs of all facility support activities, coordinate with relevant contractors when needed, and provide regular status updates to keep you informed.",
      },
    },
  },

  // Contact Page Content
  contact: {
    hero: {
      title: "Contact us",
      subtitle:
        "Get in touch to discuss your facility service needs or request a quote",
    },
    form: {
      title: "Send us a message",
      fields: {
        name: { label: "Full name", placeholder: "Your full name" },
        company: { label: "Company name (optional)", placeholder: "Your company" },
        email: { label: "Email", placeholder: "your@email.com" },
        phone: { label: "Phone (optional)", placeholder: "+371 20000000" },
        serviceType: {
          label: "Service type",
          placeholder: "Select a service",
          options: [
            { value: "daily-cleaning", label: "Daily cleaning" },
            { value: "general-cleaning", label: "General cleaning" },
            { value: "facility-support", label: "Facility support" },
            { value: "other", label: "Other / Not sure" },
          ],
        },
        message: {
          label: "Message",
          placeholder: "Please describe your needs and any specific requirements...",
        },
      },
      submitLabel: "Send message",
      successMessage:
        "Thank you for your message. We will get back to you within 1-2 business days.",
    },
    // Google Maps embed URL placeholder
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.8763947395083!2d24.121139!3d56.946419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5c8c4b1%3A0x400cfcd68f9e7c0!2sLienes%20iela%2016%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1009!5e0!3m2!1sen!2slv!4v1234567890",
  },

  // Footer Content
  footer: {
    quickLinks: {
      title: "Quick links",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contacts", href: "/contact" },
      ],
    },
    servicesLinks: {
      title: "Services",
      links: [
        { label: "Daily cleaning", href: "/services/daily-cleaning" },
        { label: "General cleaning", href: "/services/general-cleaning" },
        { label: "Facility support", href: "/services/facility-support" },
      ],
    },
    cookieNotice:
      "This website uses essential cookies for basic functionality. By continuing to use this site, you accept our use of cookies.",
  },
};

export type SiteConfig = typeof siteConfig;

