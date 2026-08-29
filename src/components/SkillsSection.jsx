import { CheckCircle2, CircleX } from 'lucide-react';

export default function SkillsSection({ matchingSkills, missingSkills }) {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Skills You Already Have</h3>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {matchingSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <CircleX className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Skills You’re Missing</h3>
        </div>

        <div className="mt-6 space-y-3">
          {missingSkills.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <span className="font-medium text-slate-800">{skill.name}</span>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                {skill.priority} Priority
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
