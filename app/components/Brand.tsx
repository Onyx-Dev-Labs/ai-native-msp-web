type MarkProps = { size?: number; className?: string };

/**
 * AI Native MSP mark: a monitoring trace that spells "Ai" —
 * a flat baseline, an A-shaped peak, then a stem capped with a live node.
 */
export function BrandMark({ size = 36, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="10" fill="#2B6CB0" />
      <path
        d="M6 28H10L16 11L22 28H28V19"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="28" cy="12" r="2.9" fill="#fff" />
    </svg>
  );
}

type LockupProps = { tone?: "ink" | "paper"; tagline?: boolean };

export function Lockup({ tone = "ink", tagline = false }: LockupProps) {
  return (
    <span className={`lockup lockup-${tone}`}>
      <BrandMark className="lockup-mark" />
      <span className="lockup-text">
        <span className="lockup-name">
          AI Native <span className="lockup-msp">MSP</span>
        </span>
        {tagline ? (
          <span className="lockup-tagline">Inman Technologies</span>
        ) : null}
      </span>
    </span>
  );
}
