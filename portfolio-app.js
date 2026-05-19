/* global React, ReactDOM, Hero, Metrics, LiveDemo, Projects, Experience, Skills, Footer,
          TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, useTweaks */
const { useEffect, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#f6c177",
  "density": "regular",
  "dark": true
}/*EDITMODE-END*/;

const ACCENT_OKLCH = {
  "#f6c177": "oklch(0.80 0.14 75)",     // amber (default)
  "#a3e0c8": "oklch(0.80 0.10 165)",    // mint
  "#9ec5ff": "oklch(0.80 0.12 245)",    // periwinkle
  "#f5a3a3": "oklch(0.80 0.10 25)"      // coral
};

// ────────────────────────────────────────────────────────────────────────────
// Top nav
// ────────────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">

        <div className="nav-links">
          <a href="#ask">Ask</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
        </div>
        <a className="nav-cta" href="#contact">Get in touch →</a>
      </div>
    </nav>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// App
// ────────────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to root
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = t.dark ? "dark" : "light";
    root.dataset.density = t.density;
    const accentVal = ACCENT_OKLCH[t.accent] || ACCENT_OKLCH["#f6c177"];
    root.style.setProperty("--accent", accentVal);
    // Recompute accent-soft as 12% mix
    const hueMatch = accentVal.match(/oklch\(([^)]+)\)/);
    if (hueMatch) {
      root.style.setProperty("--accent-soft", `oklch(${hueMatch[1]} / 0.12)`);
    }
  }, [t.dark, t.density, t.accent]);

  return (
    <>
      <Nav />
      <Hero />
      <Metrics />
      <LiveDemo />
      <Projects />
      <Experience />
      <Skills />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle
          label="Dark mode"
          value={t.dark}
          onChange={(v) => setTweak("dark", v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={Object.keys(ACCENT_OKLCH)}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Density" />
        <TweakRadio
          label="Spacing"
          value={t.density}
          options={["compact", "regular"]}
          onChange={(v) => setTweak("density", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
