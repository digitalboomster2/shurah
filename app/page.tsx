'use client'
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Minimal floating hero (no hard card) */}
      <section className="video-hero" aria-label="Hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="video-scrim" />
        <div className="hero-stack">
          <h1 className="hero-title">Your key to group finance.</h1>
          <p className="hero-subtitle">
            Plan goals, track contributions, and decide together—beautifully and compliantly.
          </p>
          <div className="cta">
            <a className="btn btn-primary btn-pill btn-large" href="/app/" target="_blank" rel="noopener noreferrer">Launch Web App</a>
            <a className="text-cta" href="#preview">Learn more →</a>
          </div>
        </div>
      </section>

        {/* Live preview in its own section */}
        <section id="preview" className="section">
          <div className="container">
            <div className="preview-header">
              <h2>Experience ShūrāBot</h2>
              <p className="lede">Try the full app right here. Create groups, track progress, and explore AI-powered insights.</p>
            </div>
            <div className="hero-preview">
              <div className="preview-frame">
                <iframe 
                  title="ShūrāBot Live Preview" 
                  src="/app/" 
                  className="app-frame"
                  allow="camera; microphone; clipboard-read; clipboard-write"
                />
                <div className="frame-overlay">
                  <div className="frame-controls">
                    <div className="control-dot red"></div>
                    <div className="control-dot yellow"></div>
                    <div className="control-dot green"></div>
                  </div>
                  <div className="frame-title">ShūrāBot Dashboard</div>
                </div>
              </div>
              <div className="preview-actions">
                <a className="btn btn-primary" href="/app/" target="_blank" rel="noopener noreferrer">
                  Open Full App
                </a>
                <a className="btn btn-secondary" href="#features">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Groups */}
      <section id="groups" className="section alt">
        <div className="container">
          <h2>Groups — organize your community</h2>
          <p className="lede">Create groups, invite members, track contributions, and manage payout order with one tap.</p>
          <div className="grid-3" style={{marginTop:16}}>
            <div className="card">
              <h3>Fast setup</h3>
              <p>Members, monthly amount, cycle length. Done in under a minute.</p>
            </div>
            <div className="card">
              <h3>Attendance & dues</h3>
              <p>Mark paid, see who’s on track, and nudge late contributors.</p>
            </div>
            <div className="card">
              <h3>Payout order</h3>
              <p>Fixed, random, or smart order based on group preferences.</p>
            </div>
          </div>
          <div className="cta" style={{marginTop:18}}>
            <a className="link" href="#proposals">Next: Proposals</a>
          </div>
        </div>
      </section>

      {/* Proposals */}
      <section id="proposals" className="section">
        <div className="container">
          <h2>Proposals — decide together</h2>
          <p className="lede">Draft proposals, discuss options, and vote with transparent outcomes.</p>
          <div className="grid-3" style={{marginTop:16}}>
            <div className="card">
              <h3>AI-drafted options</h3>
              <p>Let ShūrāBot suggest balanced choices with clear tradeoffs.</p>
            </div>
            <div className="card">
              <h3>Lightweight voting</h3>
              <p>Simple majority or custom thresholds; instant result tallies.</p>
            </div>
            <div className="card">
              <h3>Audit trail</h3>
              <p>Keep decisions documented for clarity and compliance.</p>
            </div>
          </div>
          <div className="cta" style={{marginTop:18}}>
            <a className="link" href="#insights">Next: Insights</a>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="section alt">
        <div className="container">
          <h2>Insights — coaching you can act on</h2>
          <p className="lede">Get compliance-aware guidance, projections, and gentle nudges when action is needed.</p>
          <div className="grid-3" style={{marginTop:16}}>
            <div className="card">
              <h3>Compliance first</h3>
              <p>Islamic principles built-in: no riba, no ambiguity.</p>
            </div>
            <div className="card">
              <h3>Progress tracking</h3>
              <p>See momentum and gaps; celebrate milestones together.</p>
            </div>
            <div className="card">
              <h3>Nudges & reminders</h3>
              <p>Timely, respectful notifications to keep everyone aligned.</p>
            </div>
          </div>
          <div className="cta" style={{marginTop:18}}>
            <a className="link" href="#features">Next: Features</a>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <h2>Features that adapt to your needs</h2>
          <p className="lede">Everything you need to manage group finances with confidence and clarity.</p>
          <div className="grid-3">
            <div className="card">
              <h3>Group Goal Planning</h3>
              <p>Set collective targets. Get per-member schedules and timelines.</p>
            </div>
            <div className="card">
              <h3>Scenario Simulation</h3>
              <p>&ldquo;What if 2 members drop?&rdquo; See impact on payouts and timelines.</p>
            </div>
            <div className="card">
              <h3>Shariah-Compliant Advice</h3>
              <p>Guidance aligned with halal principles. No riba, no haram.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shariah Compliance */}
      <section id="shariah" className="section alt">
        <div className="container">
          <h2>Built on Islamic principles</h2>
          <p className="lede">Every feature is designed with Shariah compliance at its core—transparent, ethical, and interest-free.</p>
          <div className="grid-3" style={{marginTop:16}}>
            <div className="card">
              <h3>No Riba (Interest)</h3>
              <p>Zero-interest contributions. Pure profit-sharing arrangements only.</p>
            </div>
            <div className="card">
              <h3>Clear Contracts</h3>
              <p>Transparent terms and conditions. No ambiguity or hidden clauses.</p>
            </div>
            <div className="card">
              <h3>Mutual Consent</h3>
              <p>Democratic decision-making. Every member has a voice and vote.</p>
            </div>
            <div className="card">
              <h3>Fair Distribution</h3>
              <p>Equitable payout systems with transparent ordering mechanisms.</p>
            </div>
            <div className="card">
              <h3>Risk Sharing</h3>
              <p>Community-based support where members help each other succeed.</p>
            </div>
            <div className="card">
              <h3>Ethical Guidelines</h3>
              <p>AI coaching aligned with halal financial practices and values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="preview-header">
            <h2>Simple, transparent pricing</h2>
            <p className="lede">Start free. Upgrade when you need more. No hidden fees, ever.</p>
          </div>
          <div className="grid-3" style={{marginTop:32}}>
            <div className="card">
              <h3>Free</h3>
              <div className="pricing-amount">
                <span className="price">$0</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Up to 2 groups</li>
                <li>✓ 10 members per group</li>
                <li>✓ Basic AI insights</li>
                <li>✓ Standard support</li>
              </ul>
              <a className="btn btn-secondary" href="/app/" target="_blank" rel="noopener noreferrer" style={{width:'100%'}}>Start Free</a>
            </div>
            <div className="card featured">
              <div className="pricing-badge">POPULAR</div>
              <h3>Pro</h3>
              <div className="pricing-amount">
                <span className="price">$9</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Unlimited groups</li>
                <li>✓ Unlimited members</li>
                <li>✓ Advanced AI coaching</li>
                <li>✓ Priority support</li>
                <li>✓ Custom proposals</li>
                <li>✓ Export & reports</li>
              </ul>
              <a className="btn btn-primary" href="/app/" target="_blank" rel="noopener noreferrer" style={{width:'100%'}}>Start Pro Trial</a>
            </div>
            <div className="card">
              <h3>Enterprise</h3>
              <div className="pricing-amount">
                <span className="price">Custom</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Pro</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom integrations</li>
                <li>✓ White-label options</li>
                <li>✓ SLA guarantees</li>
                <li>✓ Training & onboarding</li>
              </ul>
              <a className="btn btn-secondary" href="mailto:enterprise@shurabot.com" style={{width:'100%'}}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="section alt">
        <div className="container">
          <h2>Real communities, real results</h2>
          <p className="lede">See how ShūrāBot helps groups achieve their financial goals together.</p>
          <div className="case-study-card">
            <div className="case-study-header">
              <div className="case-study-avatar">M</div>
              <div>
                <h3 className="case-study-title">Masjid Community Group</h3>
                <p className="case-study-meta">Toronto, Canada • 12 members</p>
              </div>
            </div>
            <p className="case-study-quote">
              &ldquo;We used to track contributions in a spreadsheet—late payments, confusion about payout order, and no transparency. ShūrāBot changed everything. Everyone knows exactly when they&apos;re due, payments are tracked automatically, and our AI coach keeps us motivated. We&apos;ve completed 2 full cycles with 100% participation.&rdquo;
            </p>
            <div className="case-study-stats">
              <div className="stat">
                <p className="stat-value">100%</p>
                <p className="stat-label">Payment rate</p>
              </div>
              <div className="stat">
                <p className="stat-value">$48K</p>
                <p className="stat-label">Distributed</p>
              </div>
              <div className="stat">
                <p className="stat-value">2</p>
                <p className="stat-label">Cycles completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download / CTA */}
      <section id="download" className="section">
        <div className="container">
          <div className="preview-header">
            <h2>Get started in minutes</h2>
            <p className="lede">Available on web, iOS, and Android. Your data syncs everywhere.</p>
          </div>
          <div className="download-buttons">
            <a className="btn btn-primary btn-pill btn-large" href="/app/" target="_blank" rel="noopener noreferrer">
              Launch Web App
            </a>
            <a className="btn btn-secondary btn-pill download-btn" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Image src="/store/app-store.svg" alt="App Store" className="store-icon" width={20} height={20} />
              Download on iOS
            </a>
            <a className="btn btn-secondary btn-pill download-btn" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Image src="/store/play-store.svg" alt="Play Store" className="store-icon" width={20} height={20} />
              Get it on Android
            </a>
          </div>
          <p className="download-note">
            No credit card required • Free forever • 2-minute setup
          </p>
        </div>
      </section>
      </main>
  );
}
