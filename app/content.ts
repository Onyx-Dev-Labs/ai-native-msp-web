// Approved homepage copy. Keep this text verbatim; do not edit without sign-off.

export const COMMUNITY_URL = "https://www.skool.com/native-ai-msp-4948";

export const PREMIUM_PRICE = "$99.99";

export const hero = {
  headline: "Run a tighter MSP with AI. Offer it to clients you know.",
  subhead:
    "A school for MSP owners and operators, taught by someone who runs one.",
  ctaLabel: "Join the free community",
  secondary:
    "When you’re ready to turn AI into additional revenue, upgrade to Premium inside the community — $99.99 a month. No second group to join.",
};

export const tracks = [
  {
    title: "Run your MSP with AI",
    body: "service desk, client communication, QBRs, quoting, knowledge bases, and the assistants Sean uses inside Inman.",
  },
  {
    title: "Grow revenue with AI",
    body: "find the opportunity in clients you already serve, then package, scope, price, and deliver it without becoming a custom-dev shop.",
  },
] as const;

export const aboutSean =
  "Sean Inman has spent more than two decades in technology and cybersecurity, working with local SMBs and larger enterprise environments. In 2017 he founded Inman Technologies, a Fort Worth managed IT and cybersecurity firm that helps construction, trades, and other small and midsize businesses stay secure and productive. He also co-founded and runs Onyx Dev Labs, Inman’s sister company, which builds AI automations, AI employees, and custom business systems, including MSP OS, built around how an MSP actually operates. AI Native MSP is where he teaches other MSPs those two things: how to run a tighter operation with AI, and how to package AI for the book of business they already have.";

// The two companies Sean runs. Onyx details are from onyxdev.io.
export const companies = [
  {
    name: "Inman Technologies",
    url: "https://inmantechnologies.com",
    logo: { src: "/inman-technologies-logo.svg", width: 1123, height: 281 },
    role: "Founder",
    focus: "Managed IT and cybersecurity",
    body: "Keeps construction, trades, and other small and midsize businesses secure and productive. The MSP behind the real use cases taught here.",
    meta: ["Est. 2017", "Fort Worth, TX"],
  },
  {
    name: "Onyx Dev Labs",
    url: "https://onyxdev.io",
    logo: { src: "/onyx-dev-labs-mark.png", width: 150, height: 192 },
    role: "Co-Founder & CEO",
    focus: "AI, automation, and business systems",
    body: "AI assessments, process automations, AI employees, and custom business systems, including MSP OS. Built with operators, not for them.",
    meta: ["Est. 2026", "Sister company to Inman Technologies"],
  },
] as const;

export const included = [
  {
    title: "What’s free",
    body: "Start Here, a dated library of real Inman use cases, and the community rooms.",
    // Same words as `body`, split into list items.
    items: [
      "Start Here",
      "a dated library of real Inman use cases",
      "the community rooms",
    ],
    tier: "free",
  },
  {
    title: "What’s in Premium",
    body: "Operations playbooks, the New Revenue with AI path, the skills and SOP vault, plus office hours and session recordings.",
    // Same words as `body`, split into list items.
    items: [
      "Operations playbooks",
      "the New Revenue with AI path",
      "the skills and SOP vault",
      "office hours and session recordings",
    ],
    tier: "premium",
  },
] as const;

export const finalCta = {
  line: "Start free. Upgrade when you want the working kits and the revenue path.",
  ctaLabel: "Join the free community",
};
