// src/sections/FAQ.tsx
import { useState } from 'react';

type QA = { q: string; a: string };

const QAS: QA[] = [
  {
    q: 'What does the AI agent actually do?',
    a: 'It contacts vendors via email and web forms, collects quotes, and compiles side-by-side comparisons so your team can approve procurement faster.',
  },
  {
    q: 'Is this compliant with our vendor policies?',
    a: 'Yes — we use your approved vendor list (or expand it with your consent). All outreach is auditable and can include your standard terms.',
  },
  {
    q: 'How soon can we join the pilot?',
    a: 'Typically within 1–3 business days. Leave your email and we’ll schedule a quick onboarding call.',
  },
];

function Item({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">
          {qa.q}
        </span>
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded bg-gray-100 text-gray-700"
          aria-hidden
        >
          {open ? '–' : '+'}
        </span>
      </button>
      {open && <p className="mt-3 text-sm text-gray-600">{qa.a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Quick answers about the pilot program.</p>

        <div className="mt-8 grid gap-4">
          {QAS.map((qa) => (
            <Item key={qa.q} qa={qa} />
          ))}
        </div>
      </div>
    </section>
  );
}
