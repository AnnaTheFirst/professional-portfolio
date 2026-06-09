import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MessageExplorer } from "@/components/MessageExplorer";
import { Nav } from "@/components/Nav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StaggeredHeadline } from "@/components/StaggeredHeadline";
import { bentoCategories } from "@/data/messages";

const impactMetrics = [
  {
    value: "+435%",
    label: "Suggestion-pill engagement",
    detail: "2.24% → 12% (n = 57,824 sessions)",
  },
  {
    value: "~9s",
    label: "Median latency to first reply",
    detail: "Down from ~19s with generic welcome",
  },
  {
    value: "56%",
    label: "Extended dialogue rate",
    detail: "Up from ~39% baseline (≥4 user messages)",
  },
  {
    value: "80%",
    label: "Faster content review cycles",
    detail: "Via custom Claude copy agent tooling",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Research & data analysis",
    body: "Analyzed 24,710 conversations against business goals. Identified top topics, escalation signals, frustration patterns, and negative-sentiment keywords. Validated with 200+ labeled transcripts and 6 customer follow-me-home interviews.",
  },
  {
    step: "02",
    title: "ICP segmentation framework",
    body: "Mapped 30+ customer attributes — lifecycle stage, ICP status, MRR tier, in-app coordinates — to high-value product actions. Replaced one-size-fits-all greetings with targeted conversational onboarding paths.",
  },
  {
    step: "03",
    title: "Writing guidelines as UX framework",
    body: "Authored per-topic-category and per-ICP writing guidelines that became the operational backbone for 42 conversational variants across 10 product domains.",
  },
  {
    step: "04",
    title: "Scale via Claude copy agent",
    body: "Engineered a custom Welcome Message Copy Agent pre-trained on Mailchimp voice, compliance rules, and segment-specific guidance — enabling any designer or PM to generate safe, on-brand welcome streams.",
  },
];

export default function WelcomeMessagesCaseStudy() {
  return (
    <>
      <Nav variant="case-study" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-8 md:px-8">
        {/* Hero */}
        <section className="border-b border-border pb-12 pt-4 md:pb-16">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-200 hover:text-primary cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <p className="text-sm font-medium uppercase tracking-wide text-muted">
            Mailchimp · Case study
          </p>
          <StaggeredHeadline
            text="Context-Aware Welcome Messages"
            className="mt-4 max-w-4xl font-heading text-3xl font-semibold leading-tight tracking-tight text-primary md:text-5xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary">
            Designed a personalization framework that mapped 40+ customer
            attributes to high-value product actions — turning a 2.24%
            suggestion-pill engagement rate into an active retention asset.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { term: "Role", def: "Senior Staff Design Technologist" },
              { term: "Timeline", def: "4 months, 2026" },
              { term: "Team", def: "Product, Data Engineering, Content Design" },
              { term: "Tools", def: "Voiceflow, Claude, Cursor, Segment, Amplitude" },
            ].map((item) => (
              <div key={item.term} className="rounded-lg bg-white p-4 card-shadow">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.term}
                </dt>
                <dd className="mt-1 text-sm font-medium text-primary">
                  {item.def}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Impact callout */}
        <ScrollReveal className="py-12 md:py-16">
          <aside className="rounded-xl border border-cta/20 bg-white p-6 md:p-10 card-shadow">
            <h2 className="font-heading text-xl font-semibold text-primary">
              Impact at a glance
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-heading text-3xl font-semibold text-cta">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{metric.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 border-t border-border pt-8 text-sm leading-relaxed text-secondary">
              <p>
                <strong className="text-primary">Systemic scale beats bespoke writing.</strong>{" "}
                Content design at the Senior Staff level is about building
                operational infrastructure — personalization frameworks and AI
                agents — that let entire teams generate excellent copy at scale.
              </p>
              <p>
                <strong className="text-primary">AI as an operational lever.</strong>{" "}
                Custom LLM pipelines eliminated systemic design bottlenecks and
                freed designers for strategic alignment.
              </p>
            </div>
          </aside>
        </ScrollReveal>

        {/* Context / Problem */}
        <ScrollReveal className="py-12 md:py-16">
          <section aria-labelledby="challenge-heading">
            <h2
              id="challenge-heading"
              className="font-heading text-2xl font-semibold text-primary md:text-3xl"
            >
              The challenge
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-secondary leading-relaxed">
              <p>
                Mailchimp&apos;s Digital Assistant greeted every user with the
                same static support message — whether they were a new user
                setting up a domain, a high-value customer on billing, or an
                e-commerce merchant attempting their first campaign.
              </p>
              <p>
                Zero page or account awareness caused users to ignore or dismiss
                chat immediately. The clinical, generic greeting eroded
                Mailchimp&apos;s human-centered brand voice. With just 2.24%
                suggestion-pill engagement, the assistant was a passive
                cost-center rather than a proactive adoption tool.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/generic-welcome-message.jpeg"
                    alt="Generic Mailchimp Digital Assistant welcome message with identical support greeting regardless of user context"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="p-4 text-xs text-muted">
                  The previous generic welcome — identical for every user and
                  page context.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <video
                  controls
                  className="aspect-video w-full bg-black"
                  aria-label="Video showing the same generic welcome message appearing across different pages and customer profiles"
                >
                  <source
                    src="/images/generic-welcome-messages.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <figcaption className="p-4 text-xs text-muted">
                  Same greeting across pages and ICPs — no contextual awareness.
                </figcaption>
              </figure>
            </div>
          </section>
        </ScrollReveal>

        {/* Role & constraints */}
        <ScrollReveal className="py-12 md:py-16">
          <section
            aria-labelledby="role-heading"
            className="grid gap-10 lg:grid-cols-[1fr_280px]"
          >
            <div>
              <h2
                id="role-heading"
                className="font-heading text-2xl font-semibold text-primary md:text-3xl"
              >
                My role & constraints
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-secondary leading-relaxed">
                <p>
                  I owned the end-to-end design of the personalization framework
                  — from conversation research and attribute mapping through
                  content architecture, writing guidelines, and the Claude copy
                  agent that scaled production.
                </p>
                <p>
                  I collaborated with Product and Data Engineering to pipe
                  Segment and Amplitude data into the conversational layer, and
                  partnered with content design to publish 12 live welcome paths
                  while architecting 42 variants across 10 domains.
                </p>
              </div>
            </div>
            <aside className="h-fit rounded-xl border border-border bg-white p-6 card-shadow">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted">
                Project meta
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                {[
                  ["Role", "Senior Staff Design Technologist"],
                  ["Company", "Mailchimp (Intuit)"],
                  ["Team", "Product, Data Eng, Content Design"],
                  ["Timeline", "4 months, 2026"],
                  ["Tools", "Voiceflow, Claude, Cursor, CUI"],
                  ["Scale", "42 variants · 10 domains · 7 ICPs"],
                ].map(([term, def]) => (
                  <div key={term}>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                      {term}
                    </dt>
                    <dd className="mt-0.5 text-primary">{def}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </section>
        </ScrollReveal>

        {/* Process */}
        <ScrollReveal className="py-12 md:py-16">
          <section aria-labelledby="process-heading">
            <h2
              id="process-heading"
              className="font-heading text-2xl font-semibold text-primary md:text-3xl"
            >
              Process
            </h2>
            <p className="mt-4 max-w-3xl text-secondary leading-relaxed">
              Instead of rewriting copy in isolation, I approached the problem
              from a data and systems-architecture perspective — building the
              operational infrastructure that allows an entire team to generate
              excellent copy at scale.
            </p>
            <ol className="mt-10 space-y-6">
              {processSteps.map((item, index) => (
                <li
                  key={item.step}
                  className="grid gap-4 rounded-xl border border-border bg-white p-6 card-shadow md:grid-cols-[64px_1fr]"
                >
                  <span className="font-heading text-2xl font-semibold text-cta/40">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/overview-slide-1.png"
                    alt="Research overview slide showing conversation analysis across 24,710 Digital Assistant sessions with top topics and sentiment patterns"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-border p-4 text-xs text-muted">
                  Conversation research informed the priority funnel for which
                  topics and high-value actions to target first.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <div className="relative aspect-[4/3] w-full bg-background">
                  <object
                    data="/images/welcome-message-research.pdf"
                    type="application/pdf"
                    className="h-full w-full"
                    aria-label="Welcome message research PDF showing conversation analysis methodology and findings"
                  >
                    <p className="p-6 text-sm text-secondary">
                      <a
                        href="/images/welcome-message-research.pdf"
                        className="text-cta underline cursor-pointer"
                      >
                        Download the research PDF
                      </a>
                    </p>
                  </object>
                </div>
                <figcaption className="border-t border-border p-4 text-xs text-muted">
                  Full research document — 24,710 conversations analyzed with
                  Claude and Cursor assistance.
                </figcaption>
              </figure>
            </div>
          </section>
        </ScrollReveal>

        {/* Solution - Bento + Explorer */}
        <ScrollReveal className="py-12 md:py-16">
          <section aria-labelledby="solution-heading">
            <h2
              id="solution-heading"
              className="font-heading text-2xl font-semibold text-primary md:text-3xl"
            >
              Solution
            </h2>
            <p className="mt-4 max-w-3xl text-secondary leading-relaxed">
              I architected a matrix of context-aware welcome flows — 12
              published paths and 30 additional pipeline variants mapped across
              10 core product domains. Each variant pairs ICP-specific copy with
              high-value product actions driven by live customer attributes.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {bentoCategories.map((category) => (
                <div
                  key={category.name}
                  className={`rounded-xl border p-4 transition-colors duration-200 ${
                    category.published
                      ? "border-primary/20 bg-primary text-white"
                      : "border-border bg-white/60 opacity-70"
                  }`}
                >
                  <p
                    className={`text-xs font-medium uppercase tracking-wide ${
                      category.published ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {category.name}
                  </p>
                  <p
                    className={`mt-2 font-heading text-2xl font-semibold ${
                      category.published ? "text-white" : "text-primary"
                    }`}
                  >
                    {category.branches}
                  </p>
                  <p
                    className={`text-xs ${
                      category.published ? "text-white/70" : "text-muted"
                    }`}
                  >
                    ICP branches
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Solid cards: 12 live published paths. Muted cards: pipeline
              variants architected for scale.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/variation-1.jpeg"
                    alt="Context-specific welcome message for a user on the store integration page with tailored suggestion pills"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="p-4 text-xs text-muted">
                  Context-aware welcome tailored to in-app coordinates and ICP.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/variation-2.jpeg"
                    alt="Second context-specific welcome message showing different headline and pills for a tenured analytics user"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="p-4 text-xs text-muted">
                  Same interface, different segment — copy and actions adapt to
                  customer attributes.
                </figcaption>
              </figure>
            </div>

            <div className="mt-16">
              <MessageExplorer />
            </div>
          </section>
        </ScrollReveal>

        {/* Workflow demo */}
        <ScrollReveal className="py-12 md:py-16">
          <section aria-labelledby="workflow-heading">
            <h2
              id="workflow-heading"
              className="font-heading text-2xl font-semibold text-primary md:text-3xl"
            >
              Context-aware AI design workflow
            </h2>
            <p className="mt-4 max-w-3xl text-secondary leading-relaxed">
              I engineered a custom Welcome Message Copy Agent inside Claude,
              pre-trained on Mailchimp voice guidelines, compliance rules, and
              per-topic / per-ICP writing frameworks. Any content designer or PM
              can input page parameters and instantly generate safe, on-brand
              welcome streams.
            </p>

            <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-white card-shadow">
              <video
                controls
                className="aspect-video w-full bg-black"
                aria-label="Screen recording demonstrating the Claude Welcome Message Copy Agent generating context-aware welcome message copy"
              >
                <source src="/images/claude-agent-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="p-4 text-xs text-muted">
                Claude copy agent in action — generating segment-specific welcome
                streams from writing guidelines.
              </figcaption>
            </figure>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  src: "/images/workflow-1.png",
                  alt: "Slide 1 of context-aware conversational AI workflow showing input parameters and customer attributes",
                },
                {
                  src: "/images/workflow-2.png",
                  alt: "Slide 2 showing ICP-specific writing guidelines applied to message generation",
                },
                {
                  src: "/images/workflow-3.png",
                  alt: "Slide 3 showing topic-category writing framework guiding copy structure",
                },
                {
                  src: "/images/workflow-4.png",
                  alt: "Slide 4 showing generated welcome message output with suggestion pills and rationale",
                },
              ].map((img, i) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-border bg-white card-shadow"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <figcaption className="p-3 text-xs text-muted">
                    Workflow slide {i + 1}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-border bg-white card-shadow">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/overview-slide-2.png"
                    alt="Overview slide showing personalized welcome message system architecture across topic categories and ICP segments"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-border p-4 text-xs text-muted">
                  System overview — 10 topic domains mapped to ICP-specific
                  branches.
                </figcaption>
              </figure>
            </div>
          </section>
        </ScrollReveal>

        {/* Impact & learnings */}
        <ScrollReveal className="py-12 md:py-16">
          <section aria-labelledby="impact-heading">
            <h2
              id="impact-heading"
              className="font-heading text-2xl font-semibold text-primary md:text-3xl"
            >
              Impact & learnings
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-secondary leading-relaxed">
              <p>
                The chat canvas shifted from a passive support tool to a
                proactive digital assistant that leads with the job, not a
                greeting. Pill engagement rose from 2.24% to 12%. Median latency
                to first user reply dropped from ~19 seconds to ~9 seconds.
                Extended dialogue (≥4 user messages) increased from ~39% to 56%.
              </p>
              <p>
                For customers who switched from another platform within 90 days,
                targeted welcome messages drove 62% engagement with an
                &ldquo;Import my contacts list&rdquo; flow, 14% with &ldquo;Set
                up my automations,&rdquo; and 28% with &ldquo;Explore
                integrations.&rdquo;
              </p>
              <p>
                The custom AI tooling reduced content review and drafting cycle
                times by 80% across the design organization. The writing
                guidelines became a systems-thinking deliverable for
                company-wide chatbot welcome standards.
              </p>
            </div>

            <blockquote className="mt-10 rounded-xl border-l-4 border-cta bg-white p-6 card-shadow">
              <p className="font-heading text-lg font-medium leading-relaxed text-primary">
                &ldquo;Structured, context-aware conversational design systems
                can directly impact product retention and conversion
                metrics.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-muted">
                — Key takeaway from this project
              </footer>
            </blockquote>
          </section>
        </ScrollReveal>

        {/* Footer CTA */}
        <section className="border-t border-border pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-primary">
                More work coming soon
              </h2>
              <p className="mt-2 text-sm text-secondary">
                Additional case studies will be added to this portfolio.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            >
              Back to home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
