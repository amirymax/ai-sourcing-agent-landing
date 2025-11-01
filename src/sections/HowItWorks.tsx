export default function HowItWorks() {
  const steps = [
    {
      title: 'Describe your materials',
      desc: 'Tell us what you need — quantities, specs, timelines.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <path d="M3 7h18M5 11h14M7 15h10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      title: 'AI agent gets quotes',
      desc: 'We contact vendors for pricing — email & web sourcing included.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <path d="M4 4h16v16H4z" fill="currentColor" opacity="0.1" />
          <path d="M4 9h16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      title: 'Pick the best option',
      desc: 'Review side-by-side quotes and approve procurement.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how" className="section">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <p className="section-subtitle">Three steps from request to decision.</p>

        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <li key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand/10 text-brand">
                {s.icon}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-gray-900 text-white text-xs font-semibold">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
