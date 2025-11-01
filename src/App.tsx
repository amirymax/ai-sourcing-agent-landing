import Hero from './sections/Hero';
import ValueProps from './sections/ValueProps';
import HowItWorks from './sections/HowItWorks';
import SocialProof from './sections/SocialProof';
import EmailCapture from './sections/EmailCapture';
import PricingTeaser from './sections/PricingTeaser';
import FAQ from './sections/FAQ';

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} AI Sourcing Agent</p>
        <nav className="flex items-center gap-5">
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#interest" className="nav-link">Join the pilot</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className="
          sticky top-0 z-40 border-b border-gray-200
          bg-white/85
          supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:backdrop-blur
          [@supports(not(backdrop-filter:blur(6px)))]:bg-gradient-to-b [@supports(not(backdrop-filter:blur(6px)))]:from-white [@supports(not(backdrop-filter:blur(6px)))]:to-white/90
        "
      >
        <div className="container h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 nav-link">
            <div className="h-6 w-6 rounded-md bg-brand" aria-hidden />
            <span className="font-semibold tracking-tight">AI Sourcing Agent</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#value" className="nav-link">Value</a>
            <a href="#how" className="nav-link">How it works</a>
            <a href="#social" className="nav-link">Social proof</a>
            <a href="#interest" className="nav-link">Join</a>
          </nav>
          <a href="#interest" className="btn-primary text-sm">
            Join the pilot
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <SocialProof />
        <EmailCapture />
        <PricingTeaser />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
