import { BrandMark } from "./Brand";

/** Decorative product preview for the hero: an AI-assisted service desk queue. */

const queue = [
  { id: "4821", subject: "Shared mailbox not syncing", pri: "P3", status: "Triaged" },
  { id: "4822", subject: "New hire onboarding, 3 seats", pri: "P2", status: "Draft ready", active: true },
  { id: "4823", subject: "MFA loop on field tablet", pri: "P2", status: "Routed" },
  { id: "4824", subject: "QBR deck prep", pri: "P4", status: "Queued" },
];

export function Console() {
  return (
    <div className="console" aria-hidden="true">
      <div className="console-bar">
        <BrandMark size={14} />
        <span className="console-app">service-desk</span>
        <span className="console-tabs">
          <span className="is-active">Queue</span>
          <span>Drafts</span>
          <span>KB</span>
        </span>
        <span className="console-live">
          <i /> AI triage
        </span>
      </div>

      <div className="console-table">
        <div className="console-row console-head">
          <span>ID</span>
          <span>Subject</span>
          <span>Pri</span>
          <span>Status</span>
        </div>
        {queue.map((t) => (
          <div key={t.id} className={`console-row${t.active ? " is-active" : ""}`}>
            <span className="console-id">#{t.id}</span>
            <span className="console-subject">{t.subject}</span>
            <span className={`console-pri pri-${t.pri.toLowerCase()}`}>{t.pri}</span>
            <span className="console-status">{t.status}</span>
          </div>
        ))}
      </div>

      <div className="console-draft">
        <div className="console-draft-head">
          <span>AI draft · #4822</span>
          <span className="console-pill">Needs review</span>
        </div>
        <p className="console-draft-body">
          Laptop imaged, M365 license assigned, MFA enrolled. Credentials go
          out Monday at 8:00 with the welcome checklist.
          <span className="console-caret" />
        </p>
        <div className="console-draft-foot">
          <span className="console-src">src: onboarding-sop.md · client-kb</span>
          <span className="console-actions">
            <span className="console-btn">Edit</span>
            <span className="console-btn console-btn-primary">Approve &amp; send</span>
          </span>
        </div>
      </div>
    </div>
  );
}
