import { ShieldCheck, Eye, Cpu, ArrowRight, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900">

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="w-full px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-base tracking-tight">XAI Middleware</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a href="#documentation" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Documentation
            </a>
            <a
              href="#get-access"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Get Access
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-24 text-center">
        <span className="inline-block border border-indigo-200 text-indigo-600 text-xs font-semibold px-3 py-1 rounded mb-6 tracking-widest uppercase">
          Open Standard &middot; v1.0
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl leading-tight">
          Governance and explainability<br className="hidden md:block" /> for production AI agents
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed">
          XAI Middleware intercepts every agent action at runtime, enforces your security and compliance policies, generates decision rationale, and routes high-risk operations to human review.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#get-access"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded text-sm font-medium transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#documentation"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-2.5 rounded text-sm font-medium transition-colors"
          >
            Integration Guide
          </a>
        </div>
      </section>

      {/* Documentation / How it works */}
      <section id="documentation" className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-1">How it works</h2>
          <p className="text-center text-slate-500 text-sm mb-10">
            The middleware intercepts every agent action transparently at runtime.
          </p>

          {/* Pipeline steps - horizontal on md+, vertical on mobile */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-0">
            {[
              {
                icon: <Cpu className="w-5 h-5 text-indigo-600" />,
                step: '01',
                title: 'Agent Action',
                desc: 'The AI agent produces an action or tool call.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
                step: '02',
                title: 'Policy Check',
                desc: 'The middleware evaluates it against your ruleset and calculates a risk score.',
              },
              {
                icon: <Eye className="w-5 h-5 text-indigo-600" />,
                step: '03',
                title: 'Human Review',
                desc: 'High-risk actions are queued for operator approval with full decision rationale.',
              },
              {
                icon: <Zap className="w-5 h-5 text-indigo-600" />,
                step: '04',
                title: 'Execution',
                desc: 'Approved or low-risk actions execute with an XAI trace attached.',
              },
            ].map((item, i, arr) => (
              <div key={i} className="flex flex-col md:flex-row items-center flex-1">
                {/* Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-start w-full md:w-auto md:flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-slate-400 tracking-widest">{item.step}</span>
                    {item.icon}
                  </div>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
                {/* Connector arrow - hidden after last item */}
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 mx-2 my-2 md:my-0 rotate-90 md:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Pillars */}
      <section id="features" className="bg-white border-t border-b border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-1">Core capabilities</h2>
          <p className="text-center text-slate-500 text-sm mb-10">
            Three pillars that make up the XAI Middleware runtime.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Pillar 1 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 hover:shadow-sm transition-shadow flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
                  Governance &amp; Security
                </p>
              </div>
              <h3 className="font-semibold text-base mb-2">Automated Policy and Risk Assessment</h3>
              <p className="text-slate-500 text-sm flex-grow">
                Evaluates each agent action against your policy ruleset before execution. Detects prompt injection, flags PII exposure, and scores compliance with frameworks such as the EU AI Act.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-400 font-mono">
                Console &rsaquo; Guardrails &rsaquo; Policy Rules
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 hover:shadow-sm transition-shadow flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-5 h-5 text-indigo-600 shrink-0" />
                <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
                  HITL + Explainability
                </p>
              </div>
              <h3 className="font-semibold text-base mb-2">Human-in-the-Loop and Decision Rationale</h3>
              <p className="text-slate-500 text-sm flex-grow">
                Low-confidence actions are paused and sent to a review queue. Operators see feature attributions and risk factors before approving or overriding. All decisions are logged with full XAI output.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-400 font-mono">
                Console &rsaquo; Review Queue &rsaquo; Explanations
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 hover:shadow-sm transition-shadow flex flex-col sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-indigo-600 shrink-0" />
                <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
                  Observability &amp; Reliability
                </p>
              </div>
              <h3 className="font-semibold text-base mb-2">Pipeline Monitoring and Audit Trails</h3>
              <p className="text-slate-500 text-sm flex-grow">
                Tracks every agent action with structured logs, latency metrics, and decision traces. Provides real-time alerts on anomalies, failure rates, and policy drift so teams can respond before issues escalate.
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-400 font-mono">
                Console &rsaquo; Observability &rsaquo; Traces
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-access" className="bg-indigo-600 py-14 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Request early access</h2>
        <p className="text-indigo-200 text-sm mb-8 max-w-sm mx-auto">
          Provide your email and we will send API keys along with the integration guide.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <input
            type="email"
            placeholder="you@company.com"
            className="px-4 py-2.5 rounded text-slate-900 text-sm w-60 focus:outline-none focus:ring-2 focus:ring-white/60"
          />
          <button className="bg-white hover:bg-slate-100 text-indigo-600 font-semibold px-5 py-2.5 rounded text-sm transition-colors">
            Get API Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-400 text-center">
        &copy; {new Date().getFullYear()} XAI Middleware. All rights reserved.
      </footer>

    </div>
  );
}
