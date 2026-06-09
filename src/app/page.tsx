import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-12 md:px-8 md:pt-20">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-muted">
            Senior Staff Design Technologist
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Anna Kelley
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-secondary md:text-xl">
            I design conversational systems that turn passive support into
            proactive product engagement — at scale.
          </p>
        </section>

        <section id="work" className="mt-16 md:mt-24">
          <h2 className="mb-8 font-heading text-sm font-semibold uppercase tracking-wide text-muted">
            Selected work
          </h2>
          <FeaturedProjectCard />
        </section>
      </main>

      <footer className="border-t border-border bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-muted md:px-8 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Anna Kelley</p>
          <p>
            <span className="text-muted">Contact: </span>
            <span aria-label="Contact email placeholder">[your email]</span>
          </p>
        </div>
      </footer>
    </>
  );
}
