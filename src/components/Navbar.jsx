import { Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Analyzer', href: '#analyzer' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-soft">
            <Sparkles className="h-4 w-4" />
          </span>
          ResumeAI
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#analyzer"
          className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Analyze Resume
        </a>
      </nav>
    </header>
  );
}
