import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-primary text-6xl font-bold mb-4">404</p>
          <h1 className="text-3xl md:text-4xl mb-4">Page not found</h1>
          <p className="text-text-muted mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">Go to home</Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

