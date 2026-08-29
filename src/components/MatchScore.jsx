import { AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

function getStatusConfig(score) {
  if (score >= 80) {
    return {
      label: 'Strong Match',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
      ring: 'border-emerald-200',
    };
  }
  if (score >= 60) {
    return {
      label: 'Good Match',
      color: 'text-amber-600',
      bg: 'bg-amber-100',
      ring: 'border-amber-200',
    };
  }
  if (score >= 40) {
    return {
      label: 'Moderate Match',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
      ring: 'border-orange-200',
    };
  }

  return {
    label: 'Low Match',
    color: 'text-red-600',
    bg: 'bg-red-100',
    ring: 'border-red-200',
  };
}

export default function MatchScore({ score, summary }) {
  const status = getStatusConfig(score);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Overall Match Score</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{score}%</h3>
        </div>
        <div className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ${status.bg} ${status.color}`}>
          {score >= 80 ? <CheckCircle2 className="h-4 w-4" /> : score >= 40 ? <TrendingUp className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          {status.label}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-slate-200 bg-slate-50">
          <div
            className="absolute inset-2 rounded-full border-[10px] border-transparent"
            style={{
              background: `conic-gradient(#4f7cff ${score * 3.6}deg, #e2e8f0 0deg)`,
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 12px), black calc(100% - 12px))',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 12px), black calc(100% - 12px))',
            }}
          />
          <div className="relative z-10 text-center">
            <div className="text-4xl font-black text-slate-900">{score}%</div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-600">{summary}</p>
    </div>
  );
}
