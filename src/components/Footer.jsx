export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-xl font-black text-slate-900">ResumeAI</div>
          <p className="mt-2 text-sm text-slate-600">Build a resume that gets noticed.</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
          <a href="#analyzer" className="transition hover:text-slate-900">Analyzer</a>
          <a href="#features" className="transition hover:text-slate-900">Features</a>
          <a href="#how-it-works" className="transition hover:text-slate-900">How It Works</a>
          <a href="#" className="transition hover:text-slate-900">Privacy</a>
          <a href="#" className="transition hover:text-slate-900">Contact</a>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © 2026 ResumeAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
