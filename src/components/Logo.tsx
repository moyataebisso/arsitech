import Link from "next/link";

type LogoProps = {
  variant?: "full" | "mark";
  tone?: "dark" | "light";
  className?: string;
};

function Mark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 76"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M38 70 L38 38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M38 38 Q22 30 14 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 38 Q54 30 62 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 38 L38 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="12" cy="10" r="6" fill="currentColor" />
      <circle cx="38" cy="12" r="6" fill="#C2410C" />
      <circle cx="64" cy="10" r="6" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ variant = "full", tone = "dark", className }: LogoProps) {
  const smallClass =
    tone === "light"
      ? "text-gray-300"
      : "text-text-dark";

  return (
    <Link
      href="/"
      aria-label="Arsi Technology Group — home"
      className={`items-center ${className ?? ""}`}
      style={{ gap: "10px" }}
    >
      <Mark className="w-10 h-10 text-current" />
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="font-bold text-[26px] tracking-wide whitespace-nowrap">
            ARSI
          </span>
          <span className={`text-[11px] tracking-[0.2em] mt-1 whitespace-nowrap ${smallClass}`}>
            TECHNOLOGY
          </span>
          <span className={`text-[11px] tracking-[0.2em] whitespace-nowrap ${smallClass}`}>
            GROUP
          </span>
        </span>
      )}
    </Link>
  );
}
