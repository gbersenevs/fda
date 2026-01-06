import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function Footer() {
  const { company, footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/brand/kuber-logo.svg"
                  alt="KUBER Ltd"
                  width={120}
                  height={35}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                {company.positioning}
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{company.address.full}</span>
                </div>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{company.phone}</span>
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{company.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">{footer.quickLinks.title}</h4>
              <ul className="space-y-2">
                {footer.quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4">{footer.servicesLinks.title}</h4>
              <ul className="space-y-2">
                {footer.servicesLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Details */}
            <div>
              <h4 className="font-semibold mb-4">Company details</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <span className="text-gray-500">Company:</span>{" "}
                  {company.legalName}
                </li>
                <li>
                  <span className="text-gray-500">Reg. No:</span>{" "}
                  {company.registrationNumber}
                </li>
                <li>
                  <span className="text-gray-500">Address:</span>{" "}
                  {company.address.street}, {company.address.city},{" "}
                  {company.address.postalCode}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} {company.legalName}. All rights reserved.
            </p>
            <p className="text-xs text-center md:text-right max-w-md">
              {footer.cookieNotice}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

