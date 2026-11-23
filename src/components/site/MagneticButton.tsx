import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  download?: boolean;
};

export function MagneticButton({
  children,
  to,
  href,
  variant = "primary",
  download,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left - r.width / 2) * 0.25,
      y: (e.clientY - r.top - r.height / 2) * 0.35,
    });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.06em] transition-colors sm:px-6 md:gap-3 md:px-7 md:py-4 md:text-sm md:tracking-[0.1em]";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-border text-foreground hover:border-primary/60 hover:text-primary";

  const inner = (
    <motion.span
      ref={ref}
      animate={pos}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className="inline-flex items-center gap-2.5 md:gap-3"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link
        to={to}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={`${base} ${styles}`}
      >
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      download={download}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`${base} ${styles}`}
    >
      {inner}
    </a>
  );
}
