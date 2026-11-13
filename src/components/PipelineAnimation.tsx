import { useState, useEffect } from 'react';
import { ShieldCheck, Eye, Cpu, Zap, CheckCircle2, ArrowDown, ArrowUp } from 'lucide-react';

export default function PipelineAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  // Helper to determine border and background styling based on visited/active status
  const getNodeClasses = (stepIndex: number, activeOverride?: string) => {
    if (activeStep === stepIndex) {
      // Currently processing node: darkish blue
      return activeOverride || 'border-indigo-500 bg-white ring-2 ring-indigo-100 shadow-sm';
    }
    if (activeStep > stepIndex) {
      // Completed / passed levels: very light blue
      return 'border-indigo-200 bg-indigo-50/25';
    }
    // Not visited yet: grayish
    return 'border-slate-200 bg-slate-50/60';
  };

  // Helper for connector arrows between level i and level i+1
  const renderConnector = (fromStep: number) => {
    const hasPassed = activeStep > fromStep;
    const isTransmitting = activeStep === fromStep;

    return (
      <div className="flex justify-center -my-1">
        <div className="relative w-0.5 h-3 flex items-center justify-center">
          {/* Connector line */}
          <div
            className={`w-0.5 h-full transition-colors duration-300 ${
              hasPassed ? 'bg-indigo-300' : isTransmitting ? 'bg-indigo-200' : 'bg-slate-200'
            }`}
          />
          {/* Arrowhead appears only when data has passed this connector to subsequent levels */}
          {hasPassed ? (
            <ArrowDown className="w-3.5 h-3.5 text-indigo-600 shrink-0 z-10 -my-0.5" />
          ) : isTransmitting ? (
            <span className="absolute w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-lg bg-white/95 backdrop-blur border border-slate-200 rounded-2xl p-5 shadow-sm relative">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          <span className="font-semibold text-slate-800 tracking-wider">LIVE INTERCEPTOR PIPELINE</span>
        </div>
        <span className="text-slate-400">
          {activeStep === 0 && '00 / ACTION_EMIT'}
          {activeStep === 1 && '01 / GOVERNANCE_CHECK'}
          {activeStep === 2 && '02 / XAI_TRIAGE'}
          {activeStep === 3 && '03 / TELEMETRY_LOG'}
          {activeStep === 4 && '04 / VERIFIED_EXEC'}
          {activeStep === 5 && '05 / FEEDBACK_LOOP'}
        </span>
      </div>

      <div className="relative flex">
        {/* Main Vertical Pipeline Nodes */}
        <div className="flex-1 space-y-2.5">
          {/* Node 0: AI Agent Action */}
          <div
            className={`rounded-lg border px-3 py-2 transition-all duration-300 ${getNodeClasses(
              0,
              'border-indigo-500 bg-white ring-2 ring-indigo-100 shadow-sm'
            )}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu
                  className={`w-4 h-4 ${
                    activeStep === 0
                      ? 'text-indigo-600'
                      : activeStep > 0
                        ? 'text-indigo-500'
                        : 'text-slate-400'
                  }`}
                />
                <span className="text-xs font-bold text-slate-800">AI Agent Action</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">agent.trigger_tool()</span>
            </div>
          </div>

          {/* Connector 0 -> 1 */}
          {renderConnector(0)}

          {/* Node 1: Agent Governance */}
          <div
            className={`rounded-lg border px-3 py-2 transition-all duration-300 ${getNodeClasses(1)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  className={`w-4 h-4 ${
                    activeStep === 1
                      ? 'text-indigo-600'
                      : activeStep > 1
                        ? 'text-indigo-500'
                        : 'text-slate-400'
                  }`}
                />
                <span className="text-xs font-semibold text-slate-800">01 · Agent Governance</span>
              </div>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeStep >= 1
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                Policy: Compliant
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 pl-6">
              <span>Risk: 0.04</span>
              <span>•</span>
              <span>Permissions: Verified</span>
              <span>•</span>
              <span className={activeStep >= 1 ? 'text-emerald-600 font-semibold' : 'text-slate-400'}>
                Status: Passed
              </span>
            </div>
          </div>

          {/* Connector 1 -> 2 */}
          {renderConnector(1)}

          {/* Node 2: Explainability & HITL */}
          <div
            className={`rounded-lg border px-3 py-2 transition-all duration-300 ${getNodeClasses(2)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Eye
                  className={`w-4 h-4 ${
                    activeStep === 2
                      ? 'text-indigo-600'
                      : activeStep > 2
                        ? 'text-indigo-500'
                        : 'text-slate-400'
                  }`}
                />
                <span className="text-xs font-semibold text-slate-800">02 · Explainability &amp; HITL</span>
              </div>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeStep >= 2
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                Approved
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono text-slate-500 pl-6">
              <span>Intent: +0.32</span>
              <span>•</span>
              <span>Sensitivity: -0.05</span>
              <span>•</span>
              <span>Confidence: 94%</span>
            </div>
          </div>

          {/* Connector 2 -> 3 */}
          {renderConnector(2)}

          {/* Node 3: Observability & Reliability */}
          <div
            className={`rounded-lg border px-3 py-2 transition-all duration-300 ${getNodeClasses(3)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Zap
                  className={`w-4 h-4 ${
                    activeStep === 3
                      ? 'text-indigo-600'
                      : activeStep > 3
                        ? 'text-indigo-500'
                        : 'text-slate-400'
                  }`}
                />
                <span className="text-xs font-semibold text-slate-800">03 · Observability &amp; Reliability</span>
              </div>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeStep >= 3
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                12ms
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 pl-6">
              <span>Reliability: 99.9%</span>
              <span>•</span>
              <span>Audit Trace: Recorded</span>
              <span>•</span>
              <span className={activeStep >= 3 ? 'text-emerald-600' : 'text-slate-400'}>Success</span>
            </div>
          </div>

          {/* Connector 3 -> 4 */}
          {renderConnector(3)}

          {/* Node 4: Verified Execution */}
          <div
            className={`rounded-lg border px-3 py-2 transition-all duration-300 ${getNodeClasses(
              4,
              'border-indigo-500 bg-white ring-2 ring-indigo-100 shadow-sm'
            )}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className={`w-4 h-4 ${
                    activeStep >= 4 ? 'text-emerald-600' : 'text-slate-400'
                  }`}
                />
                <span className="text-xs font-bold text-slate-800">Verified Execution</span>
              </div>
              <span
                className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${
                  activeStep >= 4
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-100 text-slate-400 border-slate-200'
                }`}
              >
                Successful
              </span>
            </div>
          </div>
        </div>

        {/* Continuous Monitoring Feedback Loop (Right Rail) */}
        <div className="hidden sm:flex flex-col items-center justify-between pl-3 ml-2 border-l border-dashed border-indigo-200 py-1">
          <ArrowUp
            className={`w-3.5 h-3.5 transition-colors ${
              activeStep === 5 ? 'text-indigo-600 animate-bounce' : 'text-indigo-300'
            }`}
          />
          <div className="flex flex-col items-center my-auto">
            <span
              className={`text-[9px] font-mono tracking-widest uppercase transition-colors [writing-mode:vertical-rl] rotate-180 py-2 ${
                activeStep === 5 ? 'text-indigo-600 font-bold' : 'text-slate-400'
              }`}
            >
              Continuous Feedback Loop
            </span>
            {activeStep === 5 && (
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping"></span>
            )}
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
        </div>
      </div>

      {/* Footer subtle status message */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>INTERCEPT: ACTIVE</span>
        <span className="text-indigo-600">
          {activeStep === 5 ? 'AUDIT & CALIBRATION SYNC' : 'EVERY ACTION GOVERNED & TRACED'}
        </span>
      </div>
    </div>
  );
}
