// src/sections/SocialProof.tsx
export default function SocialProof() {
  const logos = [
    'The Home Depot',
    'Lowe’s',
    'Ferguson',
    'Hilti',
    'Grainger',
    '84 Lumber',
  ];

  return (
    <section id="social" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Trusted by builders and contractors</h2>
        <p className="section-subtitle">
          Leading suppliers and vendors that professionals already rely on.
        </p>

        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="
                group card
                flex items-center justify-center text-center
                px-4 py-5
                bg-white shadow-sm border border-gray-200
                transition
                hover:shadow-md hover:border-brand/40 hover:bg-brand/5
                focus-within:shadow-md focus-within:border-brand/50
                rounded-2xl
              "
              role="img"
              aria-label={name}
              title={name}
              tabIndex={0}
            >
              <span
                className="
                  font-semibold tracking-wide text-gray-600
                  transition
                  group-hover:text-brand
                "
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Names shown for demonstration purposes during pilot.
        </p>
      </div>
    </section>
  );
}
