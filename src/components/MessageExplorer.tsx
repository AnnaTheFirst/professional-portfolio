"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import {
  topicCategories,
  welcomeMessages,
  type WelcomeMessage,
} from "@/data/messages";

function MessageCard({ message }: { message: WelcomeMessage }) {
  const [rationaleOpen, setRationaleOpen] = useState(false);

  return (
    <article className="rounded-xl border border-border bg-white p-6 card-shadow">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          {message.topicCategory}
        </span>
        <span className="rounded-full bg-cta/10 px-3 py-1 text-xs font-medium text-cta">
          {message.icpSegment}
        </span>
      </div>
      <h3 className="font-heading text-xl font-semibold leading-snug text-primary">
        {message.headline}
      </h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-secondary">
        {message.bodyCopy.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div className="mt-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
          Suggestion pills
        </p>
        <ul className="flex flex-wrap gap-2" role="list">
          {message.suggestionPills.map((pill) => (
            <li key={pill}>
              <span className="inline-block rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-primary">
                {pill}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 border-t border-border pt-4">
        <button
          type="button"
          onClick={() => setRationaleOpen((open) => !open)}
          aria-expanded={rationaleOpen}
          className="flex w-full items-center justify-between gap-2 text-left text-sm font-medium text-primary transition-colors duration-200 hover:text-cta cursor-pointer"
        >
          <span>Segmentation rationale</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${rationaleOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {rationaleOpen && (
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            {message.rationale}
          </p>
        )}
      </div>
    </article>
  );
}

export function MessageExplorer() {
  const prefersReducedMotion = useReducedMotion();
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [icpFilter, setIcpFilter] = useState<string>("all");

  const icpOptions = useMemo(
    () =>
      Array.from(new Set(welcomeMessages.map((m) => m.icpSegment))).sort(),
    [],
  );

  const filteredMessages = useMemo(() => {
    return welcomeMessages.filter((message) => {
      const topicMatch =
        topicFilter === "all" || message.topicCategory === topicFilter;
      const icpMatch = icpFilter === "all" || message.icpSegment === icpFilter;
      return topicMatch && icpMatch;
    });
  }, [topicFilter, icpFilter]);

  const activeMessage = filteredMessages[0] ?? welcomeMessages[0];

  const cardVariants = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
      };

  return (
    <section aria-labelledby="explorer-heading" className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="explorer-heading"
            className="font-heading text-2xl font-semibold text-primary"
          >
            Message segmentation explorer
          </h2>
          <p className="mt-2 max-w-xl text-sm text-secondary">
            Filter by topic category and ICP segment to see how the same
            interface adapts copy, pills, and rationale across customer types.
          </p>
        </div>
        <p className="text-xs text-muted">
          Showing {filteredMessages.length} of {welcomeMessages.length} curated
          examples
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="topic-filter"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
          >
            Topic category
          </label>
          <select
            id="topic-filter"
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-primary transition-colors duration-200 focus:border-cta cursor-pointer"
          >
            <option value="all">All topics</option>
            {topicCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="icp-filter"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
          >
            ICP segment
          </label>
          <select
            id="icp-filter"
            value={icpFilter}
            onChange={(e) => setIcpFilter(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-primary transition-colors duration-200 focus:border-cta cursor-pointer"
          >
            <option value="all">All segments</option>
            {icpOptions.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${topicFilter}-${icpFilter}-${activeMessage.id}`}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.3, ease: [0.45, 0, 0.55, 1] }
          }
        >
          <MessageCard message={activeMessage} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
