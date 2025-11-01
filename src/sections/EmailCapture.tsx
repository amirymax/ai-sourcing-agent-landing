import { useState } from 'react';
import { postInterest } from '../api/interest';
import { track } from '../lib/analytics';

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);

    if (!isEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }

    setLoading(true);
    track('interest_submit_attempt', { email, company });

    try {
      const res = await postInterest({ email, company: company || undefined, note: note || undefined });
      if (res.ok) {
        setOk(true);
        track('interest_submit_success', { email });
        setEmail('');
        setCompany('');
        setNote('');
      } else {
        setOk(false);
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setOk(false);
      setError('Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="interest" className="section">
      <div className="container">
        <h2 className="section-title">Join the pilot</h2>
        <p className="section-subtitle">Leave your email — we’ll reach out soon.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">Work email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="h-11 rounded-lg border border-gray-300 px-3 focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">Company (optional)</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Construction"
              className="h-11 rounded-lg border border-gray-300 px-3 focus:ring-2 focus:ring-brand"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting…' : 'Join the pilot'}
          </button>

          {ok && <p className="text-sm text-green-600">Thanks — we’ll contact you soon.</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
}
