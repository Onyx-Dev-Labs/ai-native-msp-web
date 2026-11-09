/* eslint-disable @next/next/no-img-element */
import { BrandMark, Lockup } from "./components/Brand";
import { Console } from "./components/Console";
import { JoinButton } from "./components/JoinButton";
import {
  PREMIUM_PRICE,
  aboutSean,
  companies,
  finalCta,
  hero,
  included,
  tracks,
} from "./content";

const [headlineA, headlineB] = splitHeadline(hero.headline);

function splitHeadline(text: string): [string, string] {
  const i = text.indexOf(". ");
  return i === -1 ? [text, ""] : [text.slice(0, i + 1), text.slice(i + 2)];
}

const pad = (n: number) => String(n).padStart(2, "0");

const prices = { free: "$0", premium: PREMIUM_PRICE } as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a
            className="brand-link"
            href="#top"
            aria-label="AI Native MSP, home"
          >
            <Lockup tone="paper" />
          </a>
          <nav aria-label="Primary" className="nav">
            <a href="#tracks">Tracks</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="header-cta">
            <JoinButton label="Join free" variant="light" size="sm" />
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero dark" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                AI Native MSP <span aria-hidden="true">/</span> Inman
                Technologies
              </p>
              <h1 id="hero-title" className="hero-title">
                {headlineA} <span className="hero-accent">{headlineB}</span>
              </h1>
              <p className="hero-sub">{hero.subhead}</p>
              <div className="hero-actions">
                <JoinButton label={hero.ctaLabel} variant="light" />
                <a className="text-link" href="#pricing">
                  Free vs. Premium
                </a>
              </div>
              <p className="hero-note">{hero.secondary}</p>
            </div>
            <Console />
          </div>
        </section>

        <section id="tracks" className="section" aria-labelledby="tracks-title">
          <div className="wrap split">
            <header className="split-head">
              <p className="eyebrow">01</p>
              <h2 id="tracks-title" className="section-title">
                Two tracks
              </h2>
            </header>
            <ol className="tracks">
              {tracks.map((t, i) => (
                <li key={t.title} className="track">
                  <span className="track-num">{pad(i + 1)}</span>
                  <div>
                    <h3 className="track-title">{t.title}</h3>
                    <p className="track-body">{t.body}</p>
                  </div>
                  <TrackIcon variant={i === 0 ? "run" : "grow"} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          className="section section-mist"
          aria-labelledby="about-title"
        >
          <div className="wrap split">
            <header className="split-head">
              <p className="eyebrow">02</p>
              <h2 id="about-title" className="section-title">
                About Sean
              </h2>
            </header>
            <div className="about">
              <p className="about-text">{aboutSean}</p>
              <ul className="companies">
                {companies.map((c) => (
                  <li key={c.name} className="company">
                    <h3 className="company-logo">
                      {c.logo.src.endsWith(".svg") ? (
                        <img
                          src={c.logo.src}
                          alt={c.name}
                          width={c.logo.width}
                          height={c.logo.height}
                        />
                      ) : (
                        <>
                          <img
                            src={c.logo.src}
                            alt=""
                            width={c.logo.width}
                            height={c.logo.height}
                          />
                          <span>{c.name}</span>
                        </>
                      )}
                    </h3>
                    <p className="company-role">{c.role}</p>
                    <p className="company-focus">{c.focus}</p>
                    <p className="company-body">{c.body}</p>
                    <div className="company-foot">
                      <span>{c.meta.join(" · ")}</span>
                      <a href={c.url} target="_blank" rel="noopener noreferrer">
                        {new URL(c.url).hostname}
                        <span className="visually-hidden">
                          {" "}
                          (opens in a new tab)
                        </span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 11 11 5M6 5h5v5" />
                        </svg>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="section"
          aria-labelledby="pricing-title"
        >
          <div className="wrap">
            <header className="pricing-head">
              <p className="eyebrow">03</p>
              <h2 id="pricing-title" className="section-title">
                What’s included
              </h2>
            </header>
            <div className="plans">
              {included.map((plan) => {
                const premium = plan.tier === "premium";
                return (
                  <article
                    key={plan.tier}
                    className={`plan plan-${plan.tier}`}
                    aria-labelledby={`plan-${plan.tier}`}
                  >
                    <p className="plan-tier">{premium ? "Premium" : "Free"}</p>
                    <p className="plan-price">
                      <span className="plan-amount">{prices[plan.tier]}</span>
                      <span className="plan-per">/ month</span>
                    </p>
                    <h3 id={`plan-${plan.tier}`} className="plan-title">
                      {plan.title}
                    </h3>
                    <ul className="plan-list">
                      {plan.items.map((item) => (
                        <li key={item}>
                          <svg
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path d="M3.5 8.5l3 3 6-7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="plan-foot">
                      {premium ? (
                        <p className="plan-note">
                          Upgrade to Premium inside the community. No second
                          group to join.
                        </p>
                      ) : null}
                      <JoinButton
                        label={hero.ctaLabel}
                        variant={premium ? "light" : "solid"}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="closing dark" aria-labelledby="closing-title">
          <BrandMark size={420} className="closing-mark" />
          <div className="wrap closing-inner">
            <h2 id="closing-title" className="closing-line">
              {finalCta.line}
            </h2>
            <JoinButton label={finalCta.ctaLabel} variant="light" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <Lockup size={24} />
          <div className="footer-right">
            <img
              src="/inman-technologies-logo.svg"
              alt="Inman Technologies"
              width={1123}
              height={281}
              className="footer-inman"
            />
            <small>© {new Date().getFullYear()} Inman Technologies</small>
          </div>
        </div>
      </footer>
    </>
  );
}

function TrackIcon({ variant }: { variant: "run" | "grow" }) {
  return (
    <svg
      className="track-icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      {variant === "run" ? (
        <>
          <rect x="6" y="9" width="36" height="30" rx="3" />
          <path d="M6 17h36M13 25l4 3-4 3M21 31h9" />
        </>
      ) : (
        <>
          <path d="M6 40h36" />
          <rect x="9" y="28" width="6" height="12" />
          <rect x="21" y="21" width="6" height="19" />
          <rect x="33" y="12" width="6" height="28" />
          <path d="M9 18l12-7 7 4 11-8" />
        </>
      )}
    </svg>
  );
}
