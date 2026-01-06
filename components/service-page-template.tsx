import { Check, Users, Clock, Shield } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Container } from "@/components/container";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  whoFor: string[];
  frequency: {
    title: string;
    content: string;
  };
  qualityControl: {
    title: string;
    content: string;
  };
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  included,
  whoFor,
  frequency,
  qualityControl,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-4">{title}</h1>
            <p className="text-xl text-text-muted">{subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Description */}
      <Section>
        <p className="text-lg text-text-muted max-w-3xl">{description}</p>
      </Section>

      {/* What is Included */}
      <Section background="surface">
        <SectionHeader title="What is included" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section>
        <SectionHeader title="Who it is for" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {whoFor.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Frequency and Quality Control */}
      <Section background="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card padding="lg">
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-3" />
              <CardTitle as="h3">{frequency.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{frequency.content}</p>
            </CardContent>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-3" />
              <CardTitle as="h3">{qualityControl.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{qualityControl.content}</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Request a quote</h2>
          <p className="text-text-muted text-lg mb-8">
            Contact us to discuss your specific requirements and receive a
            tailored service proposal.
          </p>
          <Button href="/contact" size="lg">
            Get a quote
          </Button>
        </div>
      </Section>
    </>
  );
}

