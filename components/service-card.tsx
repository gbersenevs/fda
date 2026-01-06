import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Card hover className="h-full flex flex-col">
      <CardHeader>
        {icon && <div className="text-primary mb-3">{icon}</div>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-4">{description}</p>
      </CardContent>
      <div className="mt-auto pt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
}

