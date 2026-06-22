import { Link } from "@tanstack/react-router";
import logoHorizontal from "@/assets/efreire-logo-horizontal.png";
import { SITE } from "@/lib/site-config";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={SITE.name}
      className={`inline-flex items-center ${className ?? ""}`}
    >
      <img
        src={logoHorizontal}
        alt={SITE.name}
        width={210}
        height={64}
        className="h-9 w-auto md:h-10"
      />
    </Link>
  );
}
