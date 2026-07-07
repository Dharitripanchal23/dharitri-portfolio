import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "./MagneticButton";

type IconComponent = React.ComponentType<{ className?: string }>;

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: IconComponent;
  iconPosition?: "left" | "right";
  className?: string;
  magnetic?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

/* Industrial rectangles — mono uppercase labels, 1px borders, no glow. */
const variants = {
  primary:
    "bg-text text-background border border-text hover:bg-accent hover:border-accent hover:text-background",
  secondary:
    "border border-border-strong text-text hover:border-text",
  ghost: "text-muted hover:text-text",
};

const sizes = {
  md: "px-5 py-2.5 text-[11px]",
  lg: "px-7 py-3.5 text-xs",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  magnetic = true,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 font-mono font-medium uppercase tracking-[0.18em] transition-colors duration-200",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-3.5 w-3.5" aria-hidden />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-3.5 w-3.5" aria-hidden />}
    </>
  );

  const inner = href ? (
    <Link href={href} className={classes} target={target} rel={rel}>
      {content}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );

  if (!magnetic) return inner;

  return <Magnetic strength={0.2}>{inner}</Magnetic>;
}
