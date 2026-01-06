import type { Metadata } from "next";
import { Phone, Mail, MapPin, Building2, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with KUBER Ltd for professional facility services in Riga. Request a quote or ask about our cleaning and facility support services.",
  openGraph: {
    title: "Contact KUBER Ltd",
    description:
      "Get in touch with KUBER Ltd for professional facility services in Riga. Request a quote or ask about our cleaning and facility support services.",
  },
};

export default function ContactPage() {
  const { contact, company } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-4">{contact.hero.title}</h1>
            <p className="text-xl text-text-muted">{contact.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Contact Details & Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Details */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-6">Company details</h2>
            <Card padding="lg" className="bg-surface border-0 mb-6">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-muted">Company</p>
                    <p className="font-medium text-text">{company.legalName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">#</span>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Registration number</p>
                    <p className="font-medium text-text">
                      {company.registrationNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-muted">Address</p>
                    <p className="font-medium text-text">
                      {company.address.street}
                      <br />
                      {company.address.city}, {company.address.postalCode}
                      <br />
                      {company.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-muted">Phone</p>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, "")}`}
                      className="font-medium text-text hover:text-primary transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-medium text-text hover:text-primary transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {company.workingHours && (
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-muted">Working hours</p>
                      <p className="font-medium text-text">
                        {company.workingHours}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6">{contact.form.title}</h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="surface">
        <SectionHeader title="Our location" />
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border">
          {/* TODO: Replace with actual Google Maps embed URL for Lienes iela 16, Riga */}
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KUBER Ltd Location"
            className="absolute inset-0"
          ></iframe>
        </div>
        <p className="text-sm text-text-muted mt-4">
          {company.address.full}
        </p>
      </Section>
    </>
  );
}

