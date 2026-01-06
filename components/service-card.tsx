import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

const serviceIcons: Record<string, React.ReactNode> = {
  "Daily Cleaning": <Sparkles className="w-6 h-6" />,
  "General Cleaning": <Building2 className="w-6 h-6" />,
  "Facility Support": <Wrench className="w-6 h-6" />,
};

const serviceImages: Record<string, string> = {
  "Daily Cleaning": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=250&fit=crop&q=80",
  "General Cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop&q=80",
  "Facility Support": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&q=80",
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  const defaultIcon = serviceIcons[title] || <Sparkles className="w-6 h-6" />;
  const imageUrl = serviceImages[title];
  
  return (
    <Card hover className="h-full flex flex-col group overflow-hidden">
      {/* Service Image */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
              {icon || defaultIcon}
            </div>
          </div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-4 text-text-muted">{description}</p>
      </CardContent>
      <div className="mt-auto pt-4 border-t border-border/50 px-6 pb-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors group-hover:gap-3"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
