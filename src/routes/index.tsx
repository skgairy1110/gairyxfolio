import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Palette,
  Layout,
  Download,
  Mail,
  Compass,
} from "lucide-react";
import profile from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import experience from "@/data/experience.json";
import skills from "@/data/skills.json";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Marquee } from "@/components/site/Marquee";
import { ProjectCard, type Project } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { PageTransition } from "@/components/site/PageTransition";
import { NeuralNetworkHero } from "@/components/hero/NeuralNetworkHero";
import type { ParticleNetworkHandle } from "@/components/hero/ParticleNetwork";

const projects = projectsData as Project[];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Shankar Gairy — Lead Creative Designer & UI/UX Specialist Portfolio",
      },
      { name: "description", content: profile.tagline },
      {
        property: "og:title",
        content:
          "Shankar Gairy — Lead Creative Designer & UI/UX Specialist Portfolio",
      },
      { property: "og:description", content: profile.tagline },
      { property: "og:url", content: "https://gairyxfolio.vercel.app/" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://gairyxfolio.vercel.app/images/New-Botlab-Brand-Guideline-Thumb.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Shankar Gairy — Lead Creative Designer & UI/UX Specialist Portfolio",
      },
      { name: "twitter:description", content: profile.tagline },
      {
        name: "twitter:image",
        content:
          "https://gairyxfolio.vercel.app/images/New-Botlab-Brand-Guideline-Thumb.webp",
      },
    ],
    links: [{ rel: "canonical", href: "https://gairyxfolio.vercel.app/" }],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 6);
  const networkRef = useRef<ParticleNetworkHandle>(null);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 22],
  );
  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -16],
  );
  const nameY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -38],
  );

  const onCtaEnter = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    networkRef.current?.attractTo(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );
  };
  const onCtaLeave = () => networkRef.current?.release();

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative flex h-[100svh] min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050505] pt-16 md:pt-20"
      >
        <div
          aria-hidden
          style={{ y: backgroundY }}
          className="pointer-events-none absolute inset-0 opacity-60"
        >
          <NeuralNetworkHero ref={networkRef} />
        </div>
        <div
          aria-hidden
          style={{ y: backgroundY }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_50%_38%,rgba(165,208,0,0.13),transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] to-transparent"
        />

        <div className="hero-content container-px relative z-10 flex h-[calc(100svh-4rem)] w-full flex-col items-center justify-center pb-28 pt-6 text-center md:h-[calc(100svh-5rem)] md:pb-28 md:pt-8">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: photoY }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="hero-portrait relative aspect-[0.88] w-[min(62vw,300px)] overflow-hidden rounded-t-[50%] border-x border-t border-b-0 border-primary/15 bg-[radial-gradient(ellipse_at_50%_34%,rgba(165,208,0,0.16)_0%,rgba(28,37,4,0.78)_52%,#030502_100%)] shadow-[0_-20px_90px_-38px_rgba(165,208,0,0.34)] md:w-[clamp(15rem,24vw,22.5rem)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_43%,rgba(165,208,0,0.12),transparent_45%),linear-gradient(110deg,transparent_35%,rgba(165,208,0,0.1)_58%,transparent_78%)]" />
            <img
              src="/images/shankar-hero-portrait.png"
              alt="Shankar Gairy wearing sunglasses and a purple jacket"
              className="absolute bottom-0 left-1/2 h-[104%] w-auto max-w-none -translate-x-1/2 translate-y-[4%] object-contain object-bottom brightness-[0.82] contrast-[1.08] saturate-[0.82]"
            />
            <div className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-color" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
            <div className="absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent shadow-[0_0_18px_rgba(165,208,0,0.45)]" />
          </motion.div>

          <motion.h1
            style={{ y: nameY }}
            className="hero-name font-display relative z-10 -mt-[clamp(3.75rem,9vh,6rem)] flex max-w-full flex-col items-center px-2 text-[clamp(2.5rem,6vw,6.5rem)] font-extrabold leading-[0.94] tracking-normal"
          >
            {["SHANKAR", "GAIRY"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + i * 0.22,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className="whitespace-nowrap text-[#F5F3ED]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-4 text-xs tracking-wide text-[#F5F3ED]/80 md:mt-5 md:text-sm">
            Lead Creative Designer | UI/UX Specialist
          </p>
          <div className="mt-4 flex w-full max-w-sm shrink-0 flex-col items-center justify-center gap-3 sm:mt-6 sm:w-auto sm:flex-row md:mt-7">
            <div
              className="flex w-full justify-center sm:w-auto"
              data-hero-cta
              onMouseEnter={onCtaEnter}
              onMouseLeave={onCtaLeave}
            >
              <MagneticButton to="/work">Explore Work →</MagneticButton>
            </div>
            <div
              className="flex w-full justify-center sm:w-auto"
              data-hero-cta
              onMouseEnter={onCtaEnter}
              onMouseLeave={onCtaLeave}
            >
              <MagneticButton href={profile.resumeUrl} download variant="ghost">
                <Download className="size-4" />
                Download Resume
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-[#050505]/90 px-5 pb-3 pt-2 backdrop-blur-sm md:px-10 md:pb-4 md:pt-3">
          <div className="mx-auto grid max-w-6xl grid-cols-3">
            {[
              { n: "10+", label: "Years of Craft" },
              { n: "50+", label: "Major Projects" },
              { n: "100%", label: "Concept to Launch" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`px-1 py-1 text-center md:px-6 md:py-3 ${i > 0 ? "border-l border-white/15" : ""}`}
              >
                <p
                  className={`font-display text-xl font-bold leading-none tracking-normal md:text-3xl ${i === 0 ? "text-primary" : "text-[#F5F3ED]"}`}
                >
                  {item.n}
                </p>
                <p className="mt-1 text-[9px] leading-tight uppercase tracking-[0.06em] text-[#F5F3ED]/60 md:text-[10px] md:tracking-[0.1em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE EXPERTISE TICKER */}
      <Marquee items={profile.marquee} />

      {/* FEATURED WORK */}
      <section className="container-px py-24 md:py-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-mono-ui uppercase tracking-wider text-primary">
              <span>01</span>
              <span className="text-muted-foreground/60">/</span>
              <span>Selected Work</span>
            </div>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
              Crafted with purpose & vision.
            </h2>
            <p className="mt-3 max-w-xl text-base text-foreground/80 md:text-lg">
              A curated selection of brand identities, digital product systems,
              print media, and campaigns.
            </p>
          </Reveal>
          <Reveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary hover:bg-card"
            >
              <span>View all projects</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* Bento-style grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-6">
          {featured.map((p, i) => {
            const span =
              i === 0
                ? "md:col-span-4"
                : i === 1
                  ? "md:col-span-2"
                  : i === 2
                    ? "md:col-span-2"
                    : i === 3
                      ? "md:col-span-4"
                      : "md:col-span-3";
            const size = i === 0 || i === 3 ? "lg" : "md";
            return (
              <Reveal key={p.slug} className={span} delay={i * 0.05}>
                <ProjectCard project={p} size={size as "lg" | "md"} />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DIVIDER */}
      <SectionDivider label="Philosophy" index="02" />

      {/* ABOUT & DESIGN PILLARS */}
      <section className="container-px py-24 md:py-36">
        <div className="grid gap-16 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-mono-ui uppercase tracking-wider text-primary">
              <span>02</span>
              <span className="text-muted-foreground/60">/</span>
              <span>Design Philosophy</span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1] md:text-6xl font-semibold">
              A designer who ships <span className="text-primary">systems</span>
              , not screens.
            </h2>
            <p className="mt-6 text-base text-foreground/80 md:text-lg leading-relaxed">
              Twelve years leading creative across branding, motion, and
              product. Today I build visual systems for ambitious tech companies
              where clarity meets aesthetic impact.
            </p>
            <div className="mt-8">
              <MagneticButton to="/about" variant="ghost">
                Read Full Story & Skills →
              </MagneticButton>
            </div>
          </Reveal>

          {/* 3 Strategic Pillars Grid */}
          <div className="space-y-6 md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              <Reveal
                delay={0.1}
                className="rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-sm"
              >
                <Palette className="size-6 mb-4 text-primary" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  Brand Identity
                </h3>
                <p className="mt-2 text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Distinctive logo systems, typography, color architecture, and
                  scalable guidelines for modern enterprises.
                </p>
              </Reveal>
              <Reveal
                delay={0.2}
                className="rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-sm"
              >
                <Layout className="size-6 mb-4 text-primary" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  Product UI / UX
                </h3>
                <p className="mt-2 text-xs md:text-sm text-foreground/70 leading-relaxed">
                  High-conversion web platforms, SaaS product workflows, and
                  design systems focused on user engagement.
                </p>
              </Reveal>
              <Reveal
                delay={0.3}
                className="rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-sm"
              >
                <Sparkles className="size-6 mb-4 text-primary" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  Motion & Print
                </h3>
                <p className="mt-2 text-xs md:text-sm text-foreground/70 leading-relaxed">
                  Editorial whitepapers, rich media ads, motion graphics, and
                  large-scale event & drone show artwork.
                </p>
              </Reveal>
            </div>

            {/* Disciplines & Tools Chips */}
            <Reveal
              delay={0.35}
              className="rounded-2xl border border-border/80 bg-card/30 p-6"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
                <div>
                  <p className="font-mono-ui text-xs uppercase tracking-wider text-primary font-medium mb-3">
                    Core Disciplines
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.disciplines.slice(0, 6).map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-border/80 bg-background/50 px-3 py-1 text-xs text-foreground/85"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono-ui text-xs uppercase tracking-wider text-primary font-medium mb-3">
                    Tools & Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/80 bg-background/50 px-3 py-1 text-xs text-foreground/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <SectionDivider label="Experience" index="03" />

      {/* EXPERIENCE SECTION */}
      <section className="container-px py-24 md:py-36">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-mono-ui uppercase tracking-wider text-primary">
            <span>03</span>
            <span className="text-muted-foreground/60">/</span>
            <span>Track Record</span>
          </div>
          <h2 className="font-display mt-4 text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
            Where I've delivered impact.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-4">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.company} delay={i * 0.05}>
              <div className="group rounded-2xl border border-border/70 bg-card/30 p-6 md:p-8 transition-all hover:border-primary/40 hover:bg-card/60 backdrop-blur-sm">
                <div className="grid gap-4 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-3">
                    <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-mono-ui font-medium text-primary">
                      {e.period}
                    </span>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {e.location}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {e.role}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                      {e.summary}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <span className="inline-block text-sm font-semibold tracking-wider text-foreground/90 uppercase">
                      {e.company}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton to="/about" variant="ghost">
            Explore Full Experience & Background →
          </MagneticButton>
        </div>
      </section>

      {/* CREATIVE COLLABORATION BANNER */}
      <section className="container-px pb-20 pt-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-card/90 to-card/40 p-8 text-center backdrop-blur-xl md:p-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono-ui uppercase tracking-wider text-primary">
              <Compass className="size-3.5" />
              <span>Let's Create Together</span>
            </div>
            <h2 className="font-display mt-6 text-balance text-3xl font-semibold text-foreground md:text-6xl">
              Ready to build something{" "}
              <span className="text-primary">extraordinary</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-foreground/80 leading-relaxed md:text-lg">
              Open for select brand identity systems, product UI/UX design, and
              creative direction partnerships.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <MagneticButton href={`mailto:${profile.email}`}>
                <Mail className="size-4 mr-1 inline-block" />
                Get In Touch →
              </MagneticButton>
              <MagneticButton to="/work" variant="ghost">
                Browse Full Portfolio
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function SectionDivider({ label, index }: { label: string; index: string }) {
  return (
    <div className="container-px">
      <div className="hairline flex items-center justify-between py-6 font-mono-ui text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>
          {index} / {label}
        </span>
        <span className="hidden md:inline">— scroll</span>
      </div>
    </div>
  );
}
