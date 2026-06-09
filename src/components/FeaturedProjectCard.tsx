import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProjectCard() {
  return (
    <Link
      href="/work/welcome-messages"
      className="group block overflow-hidden rounded-xl border border-border bg-white card-shadow cursor-pointer"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
        <Image
          src="/images/variation-1.jpeg"
          alt="Context-aware welcome message in Mailchimp Digital Assistant showing personalized headline and suggestion pills for an e-commerce user"
          fill
          className="object-cover object-top transition-opacity duration-200 group-hover:opacity-95"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
          priority
        />
      </div>
      <div className="p-6 md:p-8">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Featured case study
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold text-primary">
          Context-Aware Welcome Messages
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary">
          Transformed Mailchimp&apos;s Digital Assistant from a generic support
          greeting into a context-aware engagement system — driving a 435%
          increase in suggestion-pill engagement.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cta transition-colors duration-200 group-hover:text-primary">
          Read case study
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </p>
      </div>
    </Link>
  );
}
