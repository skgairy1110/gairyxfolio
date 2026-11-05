import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<ParticleNetworkHandle>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const networkOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const networkScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const onCtaEnter = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    networkRef.current?.attractTo(r.left + r.width / 2, r.top + r.height / 2);
  };
  const onCtaLeave = () => networkRef.current?.release();

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="hero-cursor-none relative -mt-16 md:-mt-20 flex min-h-[100svh] md:min-h-screen h-[100svh] md:h-screen w-full items-center justify-center overflow-hidden"
      >
        <motion.div
          aria-hidden
          style={{ opacity: networkOpacity, scale: networkScale }}
          className="absolute inset-0"
        >
          <NeuralNetworkHero ref={networkRef} />
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-px relative z-10 w-full pt-20 pb-8 md:pt-24 md:pb-12 flex flex-col justify-center"
        >
          {/* Top Status & Location Pill */}
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-border/80 bg-card/70 px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono-ui text-xs font-medium uppercase tracking-wider text-foreground">
                Available for select projects
              </span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xs font-normal text-muted-foreground">
                Lead Creative Designer · New Delhi NCR
              </span>
            </div>
          </Reveal>

          {/* Main Name Display */}
          <h1 className="font-display mt-8 max-w-full text-balance text-[clamp(2.75rem,8.2vw,9rem)] leading-[0.96] tracking-tight md:mt-10 font-bold">
            {profile.name.split(" ").map((word, wi, arr) => (
              <span
                key={word + wi}
                className={`inline-block overflow-hidden align-bottom pb-4 -mb-4 pt-2 -mt-2 pr-4 -mr-4 ${
                  wi < arr.length - 1 ? "mr-4 md:mr-6" : ""
                }`}
              >
                <motion.span
                  initial={{ y: "125%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.15,
                    delay: 0.15 + wi * 0.12,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                  className="inline-block"
                >
                  {wi === 1 ? (
                    <span className="text-primary font-bold">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Core Specialization Pills (High Readability) */}
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-2.5 md:gap-3">
              {[
                {
                  label: "Brand Identity Systems",
                  icon: Palette,
                  featured: true,
                },
                { label: "UI / UX & Product Design", icon: Layout },
                { label: "Motion Graphics & 3D", icon: Sparkles },
                { label: "Print & Editorial Media", icon: Layers },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                      item.featured
                        ? "border border-primary/50 bg-primary/10 text-primary shadow-[0_0_24px_-8px_var(--color-primary)]"
                        : "border border-border/80 bg-card/60 text-foreground/85 hover:border-border hover:text-foreground"
                    } backdrop-blur-sm`}
                  >
                    <Icon className="size-3.5 text-primary" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </Reveal>

          {/* Narrative & Credibility Grid */}
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7" delay={0.35}>
              <p className="text-pretty text-lg text-foreground/90 font-light leading-relaxed md:text-2xl">
                Transforming complex ideas into{" "}
                <span className="font-medium text-foreground">
                  high-impact visual identities
                </span>{" "}
                and{" "}
                <span className="font-medium text-foreground">
                  scalable design systems
                </span>
                —helping global SaaS, tech, and travel brands stand out,
                connect, and convert.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div
                  data-hero-cta
                  onMouseEnter={onCtaEnter}
                  onMouseLeave={onCtaLeave}
                >
                  <MagneticButton to="/work">
                    Explore Selected Work →
                  </MagneticButton>
                </div>
                <div
                  data-hero-cta
                  onMouseEnter={onCtaEnter}
                  onMouseLeave={onCtaLeave}
                >
                  <MagneticButton
                    href={profile.resumeUrl}
                    download
                    variant="ghost"
                  >
                    <Download className="size-4 mr-1 inline-block" />
                    Download Resume
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            {/* Impact Metrics Card */}
            <Reveal className="md:col-span-5" delay={0.45}>
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border/80 bg-card/50 p-6 backdrop-blur-md shadow-lg">
                <div className="border-b border-border/50 pb-4">
                  <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                    10+
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground md:text-sm">
                    Years Craft
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Brand, UI/UX, & Motion
                  </p>
                </div>
                <div className="border-b border-border/50 pb-4 pl-2">
                  <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                    50+
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground md:text-sm">
                    Major Projects
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    SaaS, travel-tech & events
                  </p>
                </div>
                <div className="pt-2">
                  <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                    100%
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground md:text-sm">
                    Concept to Launch
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Strategy, art direction & code
                  </p>
                </div>
                <div className="pt-2 pl-2">
                  <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                    Tier-1
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground md:text-sm">
                    Global Clients
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    BotLab, RateGain, Google & more
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </motion.div>
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
