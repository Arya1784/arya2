import { AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';

const iconMap = {
  warning: AlertTriangle,
  info: Lightbulb,
};

export default function ResumeImprovements({ improvements }) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">How To Improve Your Resume</h3>
      </div>

      <div className="mt-6 space-y-4">
        {improvements.map((item, index) => {
          const Icon = iconMap[item.type] || Lightbulb;

          return (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-500">{index + 1}</span>
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
