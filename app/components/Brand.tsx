type MarkProps = { size?: number; className?: string };

/** The "Ai" mark, traced from the brand logo: a steel A and a light-steel i. */
export function BrandMark({ size = 32, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={(size * 244) / 209}
      height={size}
      viewBox="0 0 244 209"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#47789A"
        fillRule="evenodd"
        d="M91 35H154L236 209H179L163 171H74L57 209H0ZM121.3 80.8L147.5 138H91.5Z"
      />
      <path fill="#80A5B8" d="M196 0H243V41H196ZM195 57H244V204L195 101Z" />
    </svg>
  );
}

type LockupProps = { tone?: "ink" | "paper"; size?: number };

export function Lockup({ tone = "ink", size = 30 }: LockupProps) {
  return (
    <span className={`lockup lockup-${tone}`}>
      <BrandMark size={size} className="lockup-mark" />
      <span className="lockup-name">
        <b>AI Native</b> MSP
      </span>
    </span>
  );
}
