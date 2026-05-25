"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "idle" | "embedding" | "searching" | "done";

const QUERIES = [
  {
    text: "Show me network downtime by region last quarter",
    matches: [
      { table: "network_incidents", cols: "region · downtime_hrs · quarter",  score: 0.94 },
      { table: "region_metrics",    cols: "region_id · availability_pct",     score: 0.87 },
      { table: "sla_log",           cols: "circuit_id · region · breach",     score: 0.81 },
      { table: "circuit_inventory", cols: "circuit_id · region · type",       score: 0.68 },
    ],
    time: "0.31s",
  },
  {
    text: "Which service tiers missed SLA targets this month",
    matches: [
      { table: "sla_log",           cols: "tier · breach_flag · period",      score: 0.96 },
      { table: "service_tiers",     cols: "tier_id · name · target_pct",      score: 0.91 },
      { table: "region_metrics",    cols: "tier · availability_pct · month",  score: 0.78 },
      { table: "contracts",         cols: "account_id · tier · sla_target",   score: 0.65 },
    ],
    time: "0.28s",
  },
  {
    text: "Compare billing errors across customer segments",
    matches: [
      { table: "billing_errors",    cols: "segment · error_type · count",     score: 0.93 },
      { table: "customer_segments", cols: "segment_id · name · rev_band",     score: 0.88 },
      { table: "invoices",          cols: "customer_id · segment · amount",   score: 0.74 },
      { table: "error_codes",       cols: "code · description · severity",    score: 0.61 },
    ],
    time: "0.34s",
  },
  {
    text: "Top circuits by incident volume last 90 days",
    matches: [
      { table: "network_incidents", cols: "circuit_id · incident_type · ts",  score: 0.97 },
      { table: "circuit_inventory", cols: "circuit_id · region · capacity",   score: 0.89 },
      { table: "maintenance_log",   cols: "circuit_id · date · type",         score: 0.72 },
      { table: "sla_log",           cols: "circuit_id · breach_flag",         score: 0.59 },
    ],
    time: "0.27s",
  },
  {
    text: "Revenue impact of outages by country this year",
    matches: [
      { table: "outage_events",     cols: "country · duration_hrs · revenue", score: 0.95 },
      { table: "region_metrics",    cols: "country · revenue_impact · period",score: 0.86 },
      { table: "network_incidents", cols: "country · severity · ts",          score: 0.79 },
      { table: "contracts",         cols: "account_id · country · mrr",       score: 0.63 },
    ],
    time: "0.29s",
  },
];

export function SemanticSearchDemo({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeQ, setActiveQ] = useState<(typeof QUERIES)[0] | null>(null);
  const [visibleRows, setVisibleRows] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const runQuery = (q: (typeof QUERIES)[0]) => {
    clearTimers();
    setActiveQ(q);
    setPhase("embedding");
    setVisibleRows(0);

    const t1 = setTimeout(() => {
      setPhase("searching");
      q.matches.forEach((_, i) => {
        const t = setTimeout(() => setVisibleRows(i + 1), i * 260);
        timers.current.push(t);
      });
      const t2 = setTimeout(() => setPhase("done"), q.matches.length * 260 + 420);
      timers.current.push(t2);
    }, 900);
    timers.current.push(t1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const lc = inputVal.toLowerCase();
    const found = QUERIES.find(q =>
      lc.split(" ").some(w => w.length > 3 && q.text.toLowerCase().includes(w))
    ) ?? QUERIES[0];
    setInputVal("");
    runQuery(found);
  };

  const reset = () => {
    clearTimers();
    setPhase("idle");
    setActiveQ(null);
    setVisibleRows(0);
    setInputVal("");
  };

  const busy = phase === "embedding" || phase === "searching";

  return (
    <motion.div
      className="sdemo-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        className="sdemo-panel"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="sdemo-header">
          <div>
            <div className="sdemo-label">Semantic Search Engine</div>
            <div className="sdemo-subtitle">
              Built at Colt Technological Services · 12 enterprise BigQuery tables
            </div>
          </div>
          <button className="sdemo-close" onClick={onClose} aria-label="Close demo">✕</button>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="sdemo-form">
          <input
            ref={inputRef}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Describe the data you need in plain English…"
            className="sdemo-input"
            disabled={busy}
          />
          <button type="submit" className="sdemo-submit" disabled={busy || !inputVal.trim()}>
            Search
          </button>
        </form>

        {/* Example queries */}
        <div className="sdemo-examples">
          <span className="sdemo-examples-label">Try:</span>
          {QUERIES.map((q, i) => (
            <button
              key={i}
              className="sdemo-example-pill"
              onClick={() => { setInputVal(""); runQuery(q); }}
              disabled={busy}
            >
              {q.text}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="sdemo-results">
          <AnimatePresence mode="wait">
            {phase === "idle" && (
              <motion.div
                key="idle"
                className="sdemo-idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="sdemo-idle-icon">⟳</div>
                <div className="sdemo-idle-text">Select a query above or type your own</div>
                <div className="sdemo-idle-sub">
                  Searches across 12 enterprise tables using vector similarity — no SQL required
                </div>
              </motion.div>
            )}

            {phase === "embedding" && (
              <motion.div
                key="embedding"
                className="sdemo-embedding"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="sdemo-phase-label">
                  Vectorizing query
                  <span className="sdemo-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </span>
                </div>
                <div className="sdemo-embed-bar">
                  <motion.div
                    className="sdemo-embed-fill"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.82, ease: "easeInOut" }}
                  />
                </div>
                <div className="sdemo-embed-stats">
                  <span>Model: text-embedding-ada-002</span>
                  <span>Dimensions: 1536</span>
                </div>
              </motion.div>
            )}

            {(phase === "searching" || phase === "done") && activeQ && (
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <div className="sdemo-results-header">
                  <span className="sdemo-results-query">&ldquo;{activeQ.text}&rdquo;</span>
                  {phase === "done" && (
                    <button className="sdemo-reset" onClick={reset}>↩ Reset</button>
                  )}
                </div>

                <div className="sdemo-table">
                  <div className="sdemo-table-head">
                    <span>Table</span>
                    <span>Matched Columns</span>
                    <span>Similarity</span>
                  </div>
                  {activeQ.matches.map((m, i) =>
                    visibleRows > i ? (
                      <motion.div
                        key={i}
                        className="sdemo-table-row"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="sdemo-table-name">{m.table}</span>
                        <span className="sdemo-table-cols">{m.cols}</span>
                        <div className="sdemo-score-wrap">
                          <div className="sdemo-score-bar">
                            <motion.div
                              className="sdemo-score-fill"
                              initial={{ width: "0%" }}
                              animate={{ width: `${m.score * 100}%` }}
                              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                            />
                          </div>
                          <span className="sdemo-score-num">{m.score.toFixed(2)}</span>
                        </div>
                      </motion.div>
                    ) : null
                  )}
                </div>

                {phase === "done" && (
                  <motion.div
                    className="sdemo-summary"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="sdemo-summary-stat">
                      <span className="sdemo-summary-val">{activeQ.time}</span>
                      <span className="sdemo-summary-label">Query Time</span>
                    </div>
                    <div className="sdemo-summary-vs">vs</div>
                    <div className="sdemo-summary-stat">
                      <span className="sdemo-summary-val sdemo-summary-val--muted">~8 min</span>
                      <span className="sdemo-summary-label">Manual SQL Lookup</span>
                    </div>
                    <div className="sdemo-summary-divider" />
                    <div className="sdemo-summary-stat">
                      <span className="sdemo-summary-val">12</span>
                      <span className="sdemo-summary-label">Tables Searched</span>
                    </div>
                    <div className="sdemo-summary-stat">
                      <span className="sdemo-summary-val">{activeQ.matches.length}</span>
                      <span className="sdemo-summary-label">Matches Returned</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="sdemo-footer-note">
          Simulated demo · Real system: Python + BigQuery + Vector Embeddings
        </div>
      </motion.div>
    </motion.div>
  );
}
