import React from 'react';
import { track } from '../lib/analytics';

export default function Hero() {
  const onCtaClick = () => {
    track('cta_click', { location: 'hero', cta: 'Join the pilot' });
  };

  return (
    <section id="hero" className="section">
      <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Let an AI agent source your materials.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-prose">
            We contact vendors, collect quotes, and compare pricing—so you save time and money on every job.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#interest"
              className="btn-primary"
              onClick={onCtaClick}
              aria-label="Join the pilot"
            >
              Join the pilot
            </a>
            <span className="text-sm text-gray-500">Free while in pilot</span>
          </div>

          {/* мини-подстрока преимуществ для контекста */}
          <ul className="mt-6 grid gap-2 text-sm text-gray-600">
            <li>• Automated vendor outreach (email &amp; web forms)</li>
            <li>• Side-by-side quote comparisons</li>
            <li>• Save 5–10% on materials</li>
          </ul>
        </div>

        {/* Иллюстрация-заглушка (простая карточка), можно заменить позже */}
        <div className="hidden lg:block">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="h-56 rounded-xl bg-gradient-to-br from-brand/10 to-brand/30" />
            <div className="mt-4 h-3 w-2/3 rounded bg-gray-200" />
            <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-10 rounded-lg bg-gray-100" />
              <div className="h-10 rounded-lg bg-gray-100" />
              <div className="h-10 rounded-lg bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
