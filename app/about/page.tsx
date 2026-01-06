import type { Metadata } from "next";
import { Check, Users, ClipboardCheck, MessageSquare, Shield } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Collapsible } from "@/components/collapsible";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about KUBER Ltd, a professional facility services company in Riga providing cleaning and facility support since 2013.",
  openGraph: {
    title: "About KUBER Ltd",
    description:
      "Learn about KUBER Ltd, a professional facility services company in Riga providing cleaning and facility support since 2013.",
  },
};

export default function AboutPage() {
  const { about, home, company } = siteConfig;

  const highlightIcons = [Users, ClipboardCheck, Shield, MessageSquare];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-4">{about.hero.title}</h1>
            <p className="text-xl text-text-muted">{about.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index] || Check;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Company Overview */}
      <Section background="surface">
        <SectionHeader title={about.overview.title} />
        <div className="max-w-3xl space-y-4">
          {about.overview.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle as="h3">{home.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{home.mission.content}</p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle as="h3">{home.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-4">
                {home.vision.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Collapsible triggerText="Read more">
                <p className="text-sm">{home.vision.expandedContent}</p>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Values */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle as="h3">{home.values.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {home.values.items.map((value) => (
                  <li key={value.title}>
                    <p className="font-medium text-text text-sm">
                      {value.title}
                    </p>
                    <p className="text-sm">{value.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* How We Work */}
      <Section background="surface">
        <SectionHeader title={about.howWeWork.title} centered />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {about.howWeWork.steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h4 className="text-lg font-semibold text-text mb-2">
                      {step.title}
                    </h4>
                    <p className="text-text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience and Trust */}
      <Section>
        <SectionHeader title={about.experience.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-muted mb-6">{about.experience.content}</p>
            <p className="text-sm text-text-muted italic">
              {about.experience.clientLogosPlaceholder}
            </p>
          </div>
          <div className="bg-surface rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl font-bold text-primary mb-2">
                {new Date().getFullYear() - company.establishedYear}+
              </p>
              <p className="text-text-muted">Years of experience</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="surface">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Ready to work with us?</h2>
          <p className="text-text-muted text-lg mb-8">
            Contact us to discuss how KUBER can support your facility needs.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}

