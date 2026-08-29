import {
  BrainCircuit,
  BriefcaseBusiness,
  FileCheck2,
  Lightbulb,
  Target,
  Wrench,
} from 'lucide-react';

const features = [
  { title: 'ATS Compatibility', description: 'Check if your resume matches recruiter and ATS expectations.', icon: FileCheck2 },
  { title: 'Skill Gap Detection', description: 'See which job-critical skills are missing from your resume.', icon: Target },
  { title: 'Keyword Matching', description: 'Compare the job description against your resume language.', icon: BrainCircuit },
  { title: 'Resume Suggestions', description: 'Get actionable advice to improve each resume section.', icon: Wrench },
  { title: 'Job Match Score', description: 'Measure how well you align with the target role.', icon: BriefcaseBusiness },
  { title: 'AI Summary Generator', description: 'Write a polished, professional summary in seconds.', icon: Lightbulb },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Features</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything you need to stand out</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-slate-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
