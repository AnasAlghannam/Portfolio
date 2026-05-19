/* global React, PORTFOLIO_DATA */
const { useState, useEffect, useRef } = React;

// ────────────────────────────────────────────────────────────────────────────
// Reveal-on-scroll helper
// ────────────────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setShown(true), delay); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Hero
// ────────────────────────────────────────────────────────────────────────────
const NAME_FONTS = [
  { cls: "fnt-poppins",    label: "Poppins" },
  { cls: "fnt-instrument", label: "Instrument Serif" },
  { cls: "fnt-grotesk",    label: "Space Grotesk" },
  { cls: "fnt-dmserif",    label: "DM Serif Display" },
  { cls: "fnt-syne",       label: "Syne" },
  { cls: "fnt-mono",       label: "JetBrains Mono" }
];

function Hero() {
  const d = PORTFOLIO_DATA;
  const [time, setTime] = useState("");
  const [fontIdx, setFontIdx] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Qatar", hour12: false };
      setTime(now.toLocaleTimeString("en-GB", opts) + " AST");
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // Cycle the display font every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setFontIdx((i) => (i + 1) % NAME_FONTS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-grid">
        <Reveal>
          <div className="hero-meta" style={{ marginTop: "20px", marginBottom: "0" }}>
            <div className="hero-meta-item">
              <div className="label">Based</div>
              <div className="val">{d.location}</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Local time</div>
              <div className="val mono">{time}</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Education</div>
              <div className="val">{d.education.degree} · {d.education.school}</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Latest</div>
              <div className="val">Research Assistant — Qatar University</div>
            </div>
          </div>

          <h1 className="hero-name" data-comment-anchor="hero-name" aria-label="Anas AlGhannam">
            <span className="hero-name-stack">
              <span className="hero-name-ghost" aria-hidden="true">Anas AlGhannam</span>
              {NAME_FONTS.map((f, i) => (
                <span
                  key={f.cls}
                  className={`hero-name-layer ${f.cls} ${i === fontIdx ? "is-active" : ""}`}
                  aria-hidden={i === fontIdx ? "false" : "true"}
                >
                  Anas <span className="it">AlGhannam</span>
                </span>
              ))}
            </span>
          </h1>

          <div className="hero-roles">
            {d.roles.map((r) => <span key={r}>{r}</span>)}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="hero-tagline">
            {d.tagline.pre} <span className="accent">{d.tagline.accent}</span> {d.tagline.post}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Metrics strip
// ────────────────────────────────────────────────────────────────────────────
function Metrics() {
  return (
    <section className="metrics" aria-label="Selected metrics">
      <div className="metrics-grid">
        {PORTFOLIO_DATA.metrics.map((m, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="metric-num">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Live AI demo — uses window.claude.complete
// ────────────────────────────────────────────────────────────────────────────
const SUGGESTED_PROMPTS = [
  "What kinds of AI projects has Anas built?",
  "Summarise his reinforcement-learning research.",
  "Is he a good fit for an AI Engineering role?",
  "What's his strongest technical stack?"
];

function buildSystemPrompt() {
  const d = PORTFOLIO_DATA;
  return [
    `You are an assistant embedded in the portfolio site of ${d.name}, an AI/ML Engineer and Research Assistant based in ${d.location}.`,
    `Answer questions about his background, work and skills based ONLY on the facts below. Be concise (2-4 short sentences max), warm but professional, and never invent details.`,
    "",
    "## Summary",
    d.summary,
    "",
    "## Roles",
    d.roles.join(", "),
    "",
    "## Experience",
    ...d.experience.map(e => `- ${e.role} at ${e.org} (${e.period}): ${e.bullets.join(" ")}`),
    "",
    "## Featured Projects",
    ...d.projects.map(p => `- ${p.title} (${p.year}): ${p.summary} Stack: ${p.stack.join(", ")}.`),
    "",
    "## Skills",
    ...Object.entries(d.skills).map(([k, v]) => `- ${k}: ${v.join(", ")}`),
    "",
    "## Education",
    `${d.education.degree}, ${d.education.school}, ${d.education.period}.`,
    "",
    "If asked something outside this scope (politics, unrelated chitchat, hypothetical opinions), politely redirect to his work."
  ].join("\n");
}

function LiveDemo() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  async function ask(prompt) {
    const question = (prompt ?? q).trim();
    if (!question || loading) return;
    setTouched(true);
    setLoading(true);
    setA("");
    try {
      const res = await fetch("https://portfolio-ai-proxy.anas-alghannam00.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "user", content: `${buildSystemPrompt()}\n\n## Question\n${question}` }
          ]
        })
      });
      if (!res.ok) throw new Error(await res.text());
      const { text } = await res.json();
      // Simulated typing
      let i = 0;
      const out = String(text || "").trim();
      const step = () => {
        i = Math.min(out.length, i + Math.max(1, Math.round(out.length / 80)));
        setA(out.slice(0, i));
        if (i < out.length) setTimeout(step, 18);
      };
      step();
    } catch (err) {
      setA("Couldn't reach the model just now — try again, or email Anas directly at " + PORTFOLIO_DATA.contact.email + ".");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section" id="ask" data-screen-label="Ask">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-num">01 · LIVE</div>
            <h2 className="section-title">Ask <span className="it">anything.</span></h2>
          </div>
          <div className="section-lede">
            AI-powered, embedded right here in the page. Ask about Anas's research, projects, or stack and get an answer
            grounded in his actual work. The model only knows what's on this page.
          </div>
        </div>

        <Reveal>
          <div className="demo">
            <div className="demo-head">
              <h3>An <span className="it">AI portfolio</span> deserves a real AI inside it.</h3>
              <div className="demo-badge">Llama 3.1 · Groq</div>
            </div>

            <div className="demo-prompts">
              {SUGGESTED_PROMPTS.map((p) => (
                <button
                  key={p}
                  className="demo-chip"
                  onClick={() => { setQ(p); ask(p); }}
                  disabled={loading}
                >{p}</button>
              ))}
            </div>

            <form
              className="demo-input-wrap"
              onSubmit={(e) => { e.preventDefault(); ask(); }}
            >
              <input
                className="demo-input"
                placeholder="Ask about a project, paper, or skill…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                disabled={loading}
              />
              <button className="demo-send" type="submit" disabled={loading}>
                {loading ? "ASKING…" : "ASK →"}
              </button>
            </form>

            <div className={`demo-output ${!touched ? "empty" : ""}`}>
              {!touched && "Answers stream in here. Pick a suggestion above, or type your own."}
              {touched && a}
              {loading && !a && <span className="typing-cursor" />}
              {!loading && touched && a && <span className="typing-cursor" />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Projects
// ────────────────────────────────────────────────────────────────────────────
function Project({ project, index, isOpen, onToggle }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className={`project ${isOpen ? "expanded" : ""}`} onClick={onToggle} data-screen-label={`Project · ${project.title}`}>
      <div className="project-num">{num}</div>
      <div className="project-titleblock">
        <h3>{project.title}</h3>
        <div className="project-tag">
          <span className="tag">{project.tag}</span>
          <span className="project-year">{project.year}</span>
        </div>
      </div>
      <div className="project-summary">{project.summary}</div>
      <div className="project-arrow">→</div>

      <div className="project-detail" onClick={(e) => e.stopPropagation()}>
        <div className="detail-grid">
          <div>
            <div className="label detail-label">What it does</div>
            <ul className="detail-bullets">
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
          <div>
            <div className="label detail-label">Stack</div>
            <div className="stack-pills">
              {project.stack.map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
            <div className="detail-role">{project.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [openId, setOpenId] = useState(PORTFOLIO_DATA.projects[0].id);
  return (
    <section className="section" id="work" data-screen-label="Work">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-num">02 · WORK</div>
            <h2 className="section-title">Selected <span className="it">work.</span></h2>
          </div>
          <div className="section-lede">
            Five projects across active research, shipped product, and independent study. Click any row to expand.
          </div>
        </div>

        <Reveal>
          <div className="projects-list">
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <Project
                key={p.id}
                project={p}
                index={i}
                isOpen={openId === p.id}
                onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Experience
// ────────────────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section className="section" id="experience" data-screen-label="Experience">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-num">03 · EXPERIENCE</div>
            <h2 className="section-title">Where I've <span className="it">worked.</span></h2>
          </div>
          <div className="section-lede">
            Research, applied engineering, and infrastructure — across academic, corporate, and independent contexts.
          </div>
        </div>

        <Reveal>
          <div className="exp-list">
            {PORTFOLIO_DATA.experience.map((e, i) => (
              <div className="exp" key={i}>
                <div className="exp-period">{e.period}</div>
                <div>
                  <h3 className="exp-role">{e.role}</h3>
                  <div className="exp-org">{e.org}<span className="type">· {e.type}</span></div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Skills + certifications
// ────────────────────────────────────────────────────────────────────────────
function Skills() {
  const skills = PORTFOLIO_DATA.skills;
  const cats = Object.keys(skills);
  return (
    <section className="section" id="stack" data-screen-label="Stack">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-num">04 · STACK</div>
            <h2 className="section-title">Tools of the <span className="it">trade.</span></h2>
          </div>
          <div className="section-lede">
            Deep in the AI/ML stack — TensorFlow, PyTorch, Hugging Face — and equally comfortable in the front-end and embedded worlds.
          </div>
        </div>

        <Reveal>
          <div className="skills-grid">
            {cats.map((cat, i) => (
              <div key={cat}>
                <div className="label skill-cat-label">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>{cat}
                </div>
                <div className="skill-pills">
                  {skills[cat].map((s) => <span key={s} className="skill-pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="certs">
            <div className="label" style={{ marginBottom: "24px" }}>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>+</span>Certificates · {PORTFOLIO_DATA.certificates.length}
            </div>
            <div className="cert-cards-grid">
              {PORTFOLIO_DATA.certificates.map((c) => (
                <div key={c.title} className="cert-card">
                  <img src={c.logo} alt={c.issuer} className="cert-card-logo" />
                  <div className="cert-card-body">
                    <span className="cert-card-title">{c.title}</span>
                    <span className="cert-card-issuer">{c.issuer}</span>
                    <span className="cert-card-date">{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="certs" style={{ marginTop: "48px" }}>
            <div className="label" style={{ marginBottom: "24px" }}>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>+</span>
              Badges · {PORTFOLIO_DATA.badges.reduce((n, g) => n + g.items.length, 0)}
            </div>
            {PORTFOLIO_DATA.badges.map((group) => (
              <div key={group.issuer} className="cert-group">
                <div className="cert-group-header">
                  <img src={group.logo} alt={group.issuer} className="cert-issuer-logo" />
                </div>
                <div className="cert-badges-grid">
                  {group.items.map((b) => (
                    <div key={b.title} className="cert-badge-card">
                      <img src={b.img} alt={b.title} className="cert-badge-img" />
                      <div className="cert-badge-info">
                        <span className="cert-badge-title">{b.title}</span>
                        <span className="cert-badge-date">{b.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Footer / contact
// ────────────────────────────────────────────────────────────────────────────
function Footer() {
  const c = PORTFOLIO_DATA.contact;
  const [form, setForm] = React.useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "50db71c7-5f69-4447-913d-cb6c55b8305a",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const linkBar = (
    <div className="footer-link-bar">
      <a href={`mailto:${c.email}`}>{c.email}</a>
      <span className="footer-link-sep">·</span>
      <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
      <span className="footer-link-sep">·</span>
      <a href={c.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      <span className="footer-link-sep">·</span>
      <a href={c.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      <span className="footer-link-sep">·</span>
      <a href={c.credlyUrl} target="_blank" rel="noreferrer">Credly ↗</a>
      <span className="footer-link-sep">·</span>
      <span>{c.location}</span>
    </div>
  );

  return (
    <footer className="footer" id="contact" data-screen-label="Contact">
      <div className="footer-inner">
        <Reveal>{linkBar}</Reveal>

        <Reveal delay={80}>
          <div className="footer-top-body">
            <h2 className="footer-title">
              Let's build something <span className="it">intelligent.</span>
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-label">Name</label>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Email</label>
                  <input
                    className="contact-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="contact-field">
                <label className="contact-label">Subject</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Message</label>
                <textarea
                  className="contact-input contact-textarea"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button className="contact-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"}
              </button>
              {status === "error" && (
                <p className="contact-error">Something went wrong — try emailing directly.</p>
              )}
            </form>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Anas AlGhannam</span>
        </div>
      </div>
    </footer>
  );
}

// Export to window
Object.assign(window, { Reveal, Hero, Metrics, LiveDemo, Projects, Experience, Skills, Footer });
