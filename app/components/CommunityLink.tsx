import type { ReactNode } from "react";
import { COMMUNITY_URL } from "../content";

export function CommunityLink({ children }: { children: ReactNode }) {
  return (
    <a
      href={COMMUNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
      <svg
        className="btn-icon"
        aria-hidden="true"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </a>
  );
}
