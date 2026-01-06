import type { Metadata } from "next";
import { ClipboardList } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { ServiceCard } from "@/components/service-card";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional cleaning and facility support services for businesses in Riga. Daily cleaning, general cleaning, and facility maintenance.",
  openGraph: {
    title: "Services | KUBER Ltd",
    description:
      "Professional cleaning and facility support services for businesses in Riga. Daily cleaning, general cleaning, and facility maintenance.",
  },
};

export default function ServicesPage() {
  const { services, home } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-4">{services.hero.title}</h1>
            <p className="text-xl text-text-muted">{services.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <Section>
        <p className="text-lg text-text-muted max-w-3xl">{services.intro}</p>
      </Section>

      {/* Service Cards */}
      <Section background="surface">
        <SectionHeader title="Our services" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.services.items.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Section>

      {/* How Pricing Works */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title={services.pricing.title}
              subtitle={services.pricing.content}
            />
          </div>
          <Card padding="lg" className="bg-surface border-0">
            <CardHeader>
              <ClipboardList className="w-8 h-8 text-primary mb-3" />
              <CardTitle as="h4">Pricing factors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {services.pricing.factors.map((factor) => (
                  <li key={factor} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="surface">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Need a customized service package?</h2>
          <p className="text-text-muted text-lg mb-8">
            Contact us for a free assessment and tailored service proposal.
          </p>
          <Button href="/contact" size="lg">
            Request a quote
          </Button>
        </div>
      </Section>
    </>
  );
}

