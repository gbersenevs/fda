import { Check, Building2, Home as HomeIcon, Store, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { ServiceCard } from "@/components/service-card";
import { Collapsible } from "@/components/collapsible";
import { Container } from "@/components/container";

export default function HomePage() {
  const { home, company } = siteConfig;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-4">{company.trustLine}</p>
              <h1 className="mb-6">{home.hero.headline}</h1>
              <p className="text-lg text-text-muted mb-8 max-w-lg">
                {home.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={home.hero.primaryCta.href} size="lg">
                  {home.hero.primaryCta.label}
                </Button>
                <Button href={home.hero.secondaryCta.href} variant="outline" size="lg">
                  {home.hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Abstract brand visual */}
              <div className="relative aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
                <div className="absolute top-8 left-8 right-8 bottom-8 bg-secondary/20 rounded-lg"></div>
                <div className="absolute top-16 left-16 right-16 bottom-16 bg-tertiary/30 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <Section>
        <SectionHeader title={home.mission.title} />
        <p className="text-lg max-w-3xl">{home.mission.content}</p>
      </Section>

      {/* Vision Section */}
      <Section background="surface">
        <SectionHeader title={home.vision.title} />
        <ul className="space-y-4 mb-6 max-w-3xl">
          {home.vision.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-text-muted">{bullet}</span>
            </li>
          ))}
        </ul>
        <Collapsible>
          <p className="text-text-muted">{home.vision.expandedContent}</p>
        </Collapsible>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader title={home.values.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {home.values.items.map((value) => (
            <Card key={value.title} padding="lg" className="text-center">
              <CardHeader>
                <CardTitle as="h4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section background="surface">
        <SectionHeader title={home.services.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Objects We Serve Section */}
      <Section>
        <SectionHeader title={home.objects.title} centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.objects.categories.map((category, index) => {
            const icons = [Building2, HomeIcon, Store];
            const Icon = icons[index] || Building2;
            return (
              <Card key={category.title} padding="lg">
                <CardHeader>
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <CardTitle as="h4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Why Choose KUBER Section */}
      <Section background="surface">
        <SectionHeader title={home.whyChoose.title} centered />
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {home.whyChoose.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section>
        <SectionHeader title={home.compliance.title} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-muted mb-6">{home.compliance.content}</p>
          </div>
          <Card padding="lg" className="bg-surface border-0">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text-muted">Registration number</p>
                  <p className="font-medium text-text">{company.registrationNumber}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text-muted">Legal address</p>
                  <p className="font-medium text-text">{company.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text-muted">Contact phone</p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="font-medium text-text hover:text-primary transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="surface">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-4">{home.cta.title}</h2>
          <p className="text-text-muted text-lg mb-8">{home.cta.content}</p>
          <Button href={home.cta.buttonHref} size="lg">
            {home.cta.buttonLabel}
          </Button>
        </div>
      </Section>
    </>
  );
}

