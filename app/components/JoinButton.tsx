import { COMMUNITY_URL } from "../content";

/* eslint-disable @next/next/no-img-element */

type JoinButtonProps = {
  label: string;
  variant?: "solid" | "light" | "outline";
  size?: "md" | "sm";
};

export function JoinButton({ label, variant = "solid", size = "md" }: JoinButtonProps) {
  return (
    <a
      href={COMMUNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`join join-${variant} join-${size}`}
    >
      <img
        src="/skool-mark.svg"
        alt=""
        width={20}
        height={16}
        className="join-skool"
      />
      <span>{label}</span>
      <span className="visually-hidden"> on Skool (opens in a new tab)</span>
      <svg
        className="join-arrow"
        aria-hidden="true"
        viewBox="0 0 16 16"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </a>
  );
}
