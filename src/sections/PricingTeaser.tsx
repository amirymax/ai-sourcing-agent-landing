// src/sections/PricingTeaser.tsx
export default function PricingTeaser() {
  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-subtitle">Simple monthly plans — pause or cancel anytime.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">For small contractors starting with AI sourcing.</p>
            <div className="mt-5">
              <span className="text-3xl font-bold text-gray-900">$300</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600">
              <li>• Up to 10 sourcing requests / month</li>
              <li>• Email & web-form outreach</li>
              <li>• Basic quote comparison</li>
            </ul>
          </div>

          {/* Pro (highlight) */}
          <div className="rounded-2xl border-2 border-brand bg-white p-6 shadow-sm">
            <div className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
              Most popular
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-gray-900">Pro</h3>
            <p className="mt-1 text-sm text-gray-600">For growing teams running multiple jobs in parallel.</p>
            <div className="mt-5">
              <span className="text-3xl font-bold text-gray-900">$500</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600">
              <li>• Up to 30 sourcing requests / month</li>
              <li>• Priority outreach & follow-ups</li>
              <li>• Advanced comparisons & export</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">Enterprise</h3>
            <p className="mt-1 text-sm text-gray-600">For regional contractors and large procurement teams.</p>
            <div className="mt-5">
              <span className="text-3xl font-bold text-gray-900">$800</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600">
              <li>• Unlimited sourcing requests</li>
              <li>• Dedicated support & SLAs</li>
              <li>• Custom vendor onboarding</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Pilot pricing — subject to change after GA.
        </p>
      </div>
    </section>
  );
}
