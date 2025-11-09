import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  variant?: "primary" | "gradient" | "dark";
}

export default function HeroBanner({
  title,
  subtitle,
  ctaText = "Explorer",
  ctaLink = "/marketplace",
  backgroundImage,
  variant = "gradient",
}: HeroBannerProps) {
  const backgroundClass = {
    primary: "bg-gradient-to-br from-primary via-secondary to-accent",
    gradient:
      "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950",
    dark: "bg-gradient-to-br from-gray-900 to-gray-950",
  }[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${backgroundClass} px-6 sm:px-12 py-16 sm:py-24 text-white`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }
          : undefined
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold">Nouveau | Multi-IA intégrée</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Button */}
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg hover:shadow-xl"
        >
          {ctaText}
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
