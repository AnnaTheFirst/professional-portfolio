import Link from "next/link";

type NavProps = {
  variant?: "home" | "case-study";
};

export function Nav({ variant = "home" }: NavProps) {
  return (
    <header className="sticky top-4 z-50 mx-4 mt-4 md:mx-8">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-border bg-white/90 px-5 py-3 backdrop-blur-sm card-shadow"
      >
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-tight text-primary transition-colors duration-200 hover:text-cta cursor-pointer"
        >
          Anna Kelley
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link
              href={variant === "home" ? "#work" : "/#work"}
              className="text-secondary transition-colors duration-200 hover:text-primary cursor-pointer"
            >
              Work
            </Link>
          </li>
          <li>
            <span className="text-muted" aria-label="About section coming soon">
              About
            </span>
          </li>
          <li>
            <span className="text-muted" aria-label="Contact section coming soon">
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
