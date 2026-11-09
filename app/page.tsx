/* eslint-disable @next/next/no-img-element */
import { Lockup } from "./components/Brand";
import { JoinButton } from "./components/JoinButton";
import { SignalTrace, TrackGlyph } from "./components/Signal";
import { aboutSean, finalCta, hero, included, tracks } from "./content";

const [headlineA, headlineB] = splitHeadline(hero.headline);

function splitHeadline(text: string): [string, string] {
  const i = text.indexOf(". ");
  return i === -1 ? [text, ""] : [text.slice(0, i + 1), text.slice(i + 2)];
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand-link" href="#top" aria-label="AI Native MSP, home">
            <Lockup tagline />
          </a>
          <nav aria-label="Primary" className="nav">
            <a href="#tracks">Tracks</a>
            <a href="#about">About</a>
            <a href="#included">What’s included</a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-texture" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-head">
              <p className="kicker">
                <span className="kicker-dot" aria-hidden="true" />
                AI Native MSP <span aria-hidden="true">/</span> Inman Technologies
              </p>
              <h1 id="hero-title" className="hero-title">
                <span className="hero-line">{headlineA}</span>{" "}
                <span className="hero-line hero-line-accent">{headlineB}</span>
              </h1>
            </div>
            <div className="hero-copy">
              <p className="hero-sub">{hero.subhead}</p>
              <div className="hero-cta">
                <JoinButton label={hero.ctaLabel} />
              </div>
              <p className="hero-upgrade">
                <span className="chip chip-solid">Premium</span>
                <span>{hero.secondary}</span>
              </p>
            </div>

            <div className="console" aria-hidden="true">
              <div className="console-bar">
                <span className="console-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="mono-label">ai-native-msp</span>
              </div>
              <SignalTrace className="console-trace" />
              <ol className="console-tracks">
                {tracks.map((t, i) => (
                  <li key={t.title}>
                    <span className="mono-label">Track {pad(i + 1)}</span>
                    <span className="console-track-title">{t.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Two tracks */}
        <section id="tracks" className="band band-surface" aria-labelledby="tracks-title">
          <div className="wrap">
            <header className="section-head">
              <p className="kicker kicker-index">01</p>
              <h2 id="tracks-title" className="section-title">
                Two tracks
              </h2>
            </header>
            <ol className="tracks">
              {tracks.map((t, i) => (
                <li key={t.title} className={`track track-${i === 0 ? "run" : "grow"}`}>
                  <div className="track-top">
                    <span className="mono-label">Track {pad(i + 1)}</span>
                    <span className="track-num" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                  </div>
                  <TrackGlyph variant={i === 0 ? "run" : "grow"} />
                  <h3 className="track-title">
                    {t.title}
                    <span className="track-colon">:</span>{" "}
                  </h3>
                  <p className="track-body">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About Sean */}
        <section id="about" className="band band-paper" aria-labelledby="about-title">
          <div className="wrap about">
            <div className="about-side">
              <p className="kicker kicker-index">02</p>
              <h2 id="about-title" className="section-title">
                About Sean
              </h2>
              <figure className="inman-card">
                <img
                  src="/inman-technologies-logo.svg"
                  alt="Inman Technologies"
                  width={1123}
                  height={281}
                  className="inman-logo"
                />
              </figure>
            </div>
            <p className="about-text">{aboutSean}</p>
          </div>
        </section>

        {/* What's included */}
        <section id="included" className="band band-surface" aria-labelledby="included-title">
          <div className="wrap">
            <header className="section-head">
              <p className="kicker kicker-index">03</p>
              <h2 id="included-title" className="section-title">
                What’s included
              </h2>
            </header>
            <div className="plans">
              {included.map((plan) => (
                <article
                  key={plan.title}
                  className={`plan plan-${plan.tier}`}
                  aria-labelledby={`plan-${plan.tier}`}
                >
                  <span className={`chip ${plan.tier === "premium" ? "chip-solid" : "chip-soft"}`}>
                    {plan.tier === "premium" ? "Premium" : "Free"}
                  </span>
                  <h3 id={`plan-${plan.tier}`} className="plan-title">
                    {plan.title}
                  </h3>
                  <ol className="plan-list">
                    {plan.items.map((item, i) => (
                      <li key={item}>
                        <span className="plan-n" aria-hidden="true">
                          {pad(i + 1)}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="closing" aria-labelledby="closing-title">
          <SignalTrace className="closing-trace" />
          <div className="wrap closing-inner">
            <h2 id="closing-title" className="closing-line">
              {finalCta.line}
            </h2>
            <JoinButton label={finalCta.ctaLabel} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <Lockup />
          <img
            src="/inman-technologies-logo.svg"
            alt="Inman Technologies"
            width={1123}
            height={281}
            className="footer-inman"
          />
        </div>
      </footer>
    </>
  );
}
