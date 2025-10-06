'use client'
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Fractional.app-inspired Hero Section */}
      <section className="hero-section" aria-label="Hero">
        <div className="hero-background">
          <div className="hero-gradient" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Own together, grow together
            </h1>
            <p className="hero-subtitle">
              The first AI-powered platform for halal group finance. Create investment pools, make decisions democratically, and build wealth as a community—all while staying compliant with Islamic principles.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-large" href="/app/" target="_blank" rel="noopener noreferrer">
                Start Your Group
              </a>
              <a className="btn btn-outline btn-large" href="#how-it-works">
                How It Works
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Groups</div>
              </div>
              <div className="stat">
                <div className="stat-number">$2M+</div>
                <div className="stat-label">Pooled Capital</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Shariah Compliant</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="card-title">ShūrāBot Dashboard</div>
              </div>
              <div className="card-content">
                <div className="dashboard-preview">
                  <div className="preview-section">
                    <h4>Your Groups</h4>
                    <div className="group-item">
                      <div className="group-info">
                        <span className="group-name">Masjid Community</span>
                        <span className="group-progress">$12,400 / $15,000</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '82%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Fractional.app style */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <h2>How it works</h2>
            <p className="lede">Get started in three simple steps. No complex setup, no hidden fees.</p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create your group</h3>
                <p>Set your investment goal, invite members, and define contribution amounts. Our AI helps optimize your group structure for maximum success.</p>
                <div className="step-visual">
                  <div className="visual-card">
                    <div className="card-icon">👥</div>
                    <div className="card-text">Group Setup</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Pool your capital</h3>
                <p>Members contribute monthly through secure, Shariah-compliant transactions. Track progress in real-time with transparent reporting.</p>
                <div className="step-visual">
                  <div className="visual-card">
                    <div className="card-icon">💰</div>
                    <div className="card-text">Capital Pooling</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Invest together</h3>
                <p>Make investment decisions democratically. Our AI provides halal investment options and the group votes on opportunities.</p>
                <div className="step-visual">
                  <div className="visual-card">
                    <div className="card-icon">📈</div>
                    <div className="card-text">Smart Investing</div>
                  </div>
                </div>
              </div>
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
