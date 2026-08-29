import { FileText, SearchCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Resume',
    description: 'Upload your latest resume.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Add Job Description',
    description: 'Paste the job description.',
    icon: SearchCheck,
  },
  {
    number: '03',
    title: 'Get AI Insights',
    description: 'Receive your match score and improvement suggestions.',
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">How it works</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">How It Works</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map(({ number, title, description, icon: Icon }) => (
          <div key={number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-600">{number}</span>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
