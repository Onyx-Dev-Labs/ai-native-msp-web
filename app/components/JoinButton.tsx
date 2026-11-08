import { COMMUNITY_URL } from "../content";

/* eslint-disable @next/next/no-img-element */

export function JoinButton({ label }: { label: string }) {
  return (
    <a
      href={COMMUNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="join"
    >
      <span className="join-chip">
        <img
          src="/skool-mark.svg"
          alt=""
          width={22}
          height={17}
          className="join-skool"
        />
      </span>
      <span className="join-label">{label}</span>
      <span className="visually-hidden"> on Skool (opens in a new tab)</span>
      <svg
        className="join-arrow"
        aria-hidden="true"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
    </a>
  );
}
