import { Award, BriefcaseBusiness, BrainCircuit, GraduationCap } from 'lucide-react';

const cards = [
  { key: 'skillsMatch', label: 'Skills Match', icon: BrainCircuit },
  { key: 'experienceMatch', label: 'Experience Match', icon: BriefcaseBusiness },
  { key: 'keywordMatch', label: 'Keyword Match', icon: Award },
  { key: 'educationMatch', label: 'Education Match', icon: GraduationCap },
];

export default function ScoreBreakdown({ analysis }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ key, label, icon: Icon }) => {
        const value = analysis[key];

        return (
          <div key={key} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold text-slate-900">{value}%</span>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-700">{label}</p>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              {label === 'Skills Match' && 'Your technical experience aligns well with the job requirements.'}
              {label === 'Experience Match' && 'Most of your project experience is relevant to the target role.'}
              {label === 'Keyword Match' && 'Your resume includes a strong share of the high-value keywords.'}
              {label === 'Education Match' && 'Your academic background is highly relevant to the advertised role.'}
            </p>
          </div>
        );
      })}
    </div>
  );
}
