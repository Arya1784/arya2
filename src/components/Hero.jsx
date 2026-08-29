import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(79,124,255,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            AI-powered resume analysis • ATS-friendly insights
          </div>

          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Match Your Resume With Your Dream Job
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Upload your resume and compare it with any job description. Get an instant match score,
            identify missing skills, and improve your chances of getting shortlisted.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#analyzer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Analyze My Resume
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              ATS-ready guidance
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Instant feedback
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-brand-600 p-6 text-white">
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span>Job Match</span>
                <span className="rounded-full bg-white/10 px-2 py-1">82%</span>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <div className="text-5xl font-black">82</div>
                  <div className="text-sm text-slate-200">Strong Match</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <Sparkles className="h-7 w-7 text-violet-200" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { label: 'Skills', value: 82 },
                  { label: 'Experience', value: 76 },
                  { label: 'Keywords', value: 88 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-200">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
