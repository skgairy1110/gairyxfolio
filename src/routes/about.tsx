import { createFileRoute } from "@tanstack/react-router";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import skills from "@/data/skills.json";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { PageTransition } from "@/components/site/PageTransition";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Shankar Gairy — Lead Creative Designer & UI/UX Specialist",
      },
      { name: "description", content: `${profile.title}. ${profile.intro}` },
      {
        property: "og:title",
        content:
          "About Shankar Gairy — Lead Creative Designer & UI/UX Specialist",
      },
      { property: "og:description", content: profile.intro },
      { property: "og:url", content: "https://gairyxfolio.vercel.app/about" },
      { property: "og:type", content: "profile" },
      {
        property: "og:image",
        content:
          "https://gairyxfolio.vercel.app/images/New-Botlab-Brand-Guideline-Thumb.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About Shankar Gairy — Lead Creative Designer",
      },
      { name: "twitter:description", content: profile.intro },
      {
        name: "twitter:image",
        content:
          "https://gairyxfolio.vercel.app/images/New-Botlab-Brand-Guideline-Thumb.webp",
      },
    ],
    links: [{ rel: "canonical", href: "https://gairyxfolio.vercel.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <section className="container-px relative -mt-16 md:-mt-20 flex min-h-[100svh] md:min-h-screen h-[100svh] md:h-screen w-full flex-col justify-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-12">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1 text-xs font-mono-ui uppercase tracking-wider text-primary backdrop-blur-sm">
              <span>01</span>
              <span className="text-muted-foreground/60">/</span>
              <span>About & Experience</span>
            </div>
            <h1 className="font-display mt-6 max-w-full text-balance text-[clamp(2.75rem,8.2vw,9rem)] leading-[0.96] tracking-tight font-bold md:mt-8">
              A designer's <span className="text-primary">decade</span>.
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-12 md:items-end">
            <Reveal className="md:col-span-5">
              <div className="rounded-2xl border border-border/80 bg-card/40 p-5 md:p-6 backdrop-blur-sm">
                <p className="font-mono-ui text-xs font-medium uppercase tracking-wider text-primary">
                  Currently
                </p>
                <p className="mt-3 text-lg font-medium text-foreground md:text-xl">
                  {profile.title}
                </p>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                  {profile.location}
                </p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.1}>
              <p className="text-pretty text-base text-foreground/85 md:text-xl font-light leading-relaxed">
                {profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href={profile.resumeUrl} download>
                  Download Resume
                </MagneticButton>
                <MagneticButton
                  href={`mailto:${profile.email}`}
                  variant="ghost"
                >
                  Get in touch →
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee items={profile.marquee} reverse />

      <section className="container-px py-24 md:py-32">
        <Reveal>
          <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground">
            · Experience
          </p>
          <h2 className="font-display mt-6 text-5xl leading-[0.95] md:text-7xl">
            10 years, four chapters.
          </h2>
        </Reveal>
        <ol className="mt-16 divide-y divide-border border-y border-border">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.company} delay={i * 0.05}>
              <li className="grid grid-cols-12 gap-6 py-10 md:py-14">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {e.period}
                  </p>
                  <p className="mt-2 text-sm text-foreground/60">
                    {e.location}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-3xl md:text-4xl">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-foreground/70">{e.company}</p>
                  <p className="mt-5 max-w-3xl text-lg text-foreground/80">
                    {e.summary}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-px py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground">
              · Disciplines
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {skills.disciplines.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-border px-4 py-2 text-sm"
                >
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground">
              · Tools
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-foreground/80">
              {skills.tools.map((t) => (
                <li key={t} className="border-b border-border/50 py-2 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
