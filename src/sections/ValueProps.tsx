export default function ValueProps() {
  const items = [
    {
      title: 'Automated vendor outreach',
      desc: 'Your AI agent contacts suppliers via email and web forms — no manual calls.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <path
            fill="currentColor"
            d="M4 4h16a2 2 0 0 1 2 2v1.2L12 13 2 7.2V6a2 2 0 0 1 2-2Zm18 5.1V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.1l9.4 5.3a2 2 0 0 0 2 0L22 9.1Z"
          />
        </svg>
      ),
    },
    {
      title: 'Side-by-side quote comparisons',
      desc: 'Clear pricing comparisons across vendors — choose with confidence.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <path
            d="M5 3h4a2 2 0 0 1 2 2v14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm10 0h4a2 2 0 0 1 2 2v14h-6V5a2 2 0 0 1 2-2ZM7 7h4M7 11h4m6-4h4m-4 4h4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Save 5–10% on materials',
      desc: 'Leverage vendor competition to reduce procurement costs on every job.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <path
            d="M12 3l2.3 4.7L20 9l-4 3.9.9 5.6L12 16.9 7.1 18.5 8 12.9 4 9l5.7-1.3L12 3Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="value" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Why teams use our agent</h2>
        <p className="section-subtitle">
          Reduce procurement time and lower material costs—automatically.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand/10 text-brand">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
