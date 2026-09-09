import { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

type PlaceholderSectionProps = {
  title: string;
  description: string;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="route-page">
      <section className="route-hero" aria-labelledby="route-title">
        <p>{eyebrow}</p>
        <h1 id="route-title">{title}</h1>
        <span>{intro}</span>
      </section>
      <div className="route-section-stack">{children}</div>
    </main>
  );
}

export function PlaceholderSection({ title, description }: PlaceholderSectionProps) {
  return (
    <section className="route-section-placeholder" aria-label={title}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
