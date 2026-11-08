/** Large version of the brand trace, used as the hero and closing graphic. */
export function SignalTrace({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 220"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="signal-ticks">
        {Array.from({ length: 25 }, (_, i) => (
          <line key={i} x1={i * 20} x2={i * 20} y1="176" y2={i % 5 === 0 ? 186 : 181} />
        ))}
      </g>
      <path
        className="signal-echo"
        d="M0 166H110L160 52L210 166H300V96"
        pathLength={1}
      />
      <path
        className="signal-line"
        d="M0 166H110L160 40L210 166H300V96"
        pathLength={1}
      />
      <circle className="signal-ring" cx="300" cy="58" r="20" />
      <circle className="signal-node" cx="300" cy="58" r="11" />
      <path className="signal-tail" d="M300 166H480" />
    </svg>
  );
}

/** Small abstract glyphs for the two track cards. */
export function TrackGlyph({ variant }: { variant: "run" | "grow" }) {
  return (
    <svg
      className="track-glyph"
      viewBox="0 0 120 40"
      aria-hidden="true"
      focusable="false"
    >
      {variant === "run" ? (
        <>
          <path d="M2 30H22L30 12L38 30H58L66 12L74 30H94L102 12L110 30H118" />
          <circle cx="118" cy="30" r="3.5" />
        </>
      ) : (
        <>
          <path d="M2 34H30V26H58V18H86V10H112" />
          <circle cx="114" cy="10" r="3.5" />
        </>
      )}
    </svg>
  );
}
