import { CommunityLink } from "./components/CommunityLink";
import { aboutSean, finalCta, hero, included, tracks } from "./content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top">
            AI Native MSP
          </a>
          <nav aria-label="Primary" className="nav">
            <a href="#tracks">Tracks</a>
            <a href="#about">About</a>
            <a href="#included">What’s included</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="container">
            <h1 id="hero-title">{hero.headline}</h1>
            <p className="lede">{hero.subhead}</p>
            <div className="hero-actions">
              <CommunityLink>{hero.ctaLabel}</CommunityLink>
            </div>
            <p className="hero-secondary">{hero.secondary}</p>
          </div>
        </section>

        <section id="tracks" className="section" aria-labelledby="tracks-title">
          <div className="container">
            <h2 id="tracks-title" className="section-title">
              Two tracks
            </h2>
            <ol className="card-grid">
              {tracks.map((track, i) => (
                <li key={track.title} className="card">
                  <span className="card-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="card-body">
                    <strong className="card-lead">{track.title}:</strong>{" "}
                    {track.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          className="section section-muted"
          aria-labelledby="about-title"
        >
          <div className="container about">
            <h2 id="about-title" className="section-title">
              About Sean
            </h2>
            <p className="about-text">{aboutSean}</p>
          </div>
        </section>

        <section
          id="included"
          className="section"
          aria-labelledby="included-title"
        >
          <div className="container">
            <h2 id="included-title" className="section-title">
              What’s included
            </h2>
            <div className="card-grid">
              {included.map((item) => (
                <article
                  key={item.title}
                  className={
                    item.tier === "premium" ? "card card-premium" : "card"
                  }
                >
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="container final-inner">
            <h2 id="final-title" className="final-line">
              {finalCta.line}
            </h2>
            <CommunityLink>{finalCta.ctaLabel}</CommunityLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="wordmark wordmark-small">AI Native MSP</span>
          <span>Inman Technologies</span>
        </div>
      </footer>
    </>
  );
}
