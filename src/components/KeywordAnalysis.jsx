import { ArrowUpRight, CircleDashed, Search } from 'lucide-react';

export default function KeywordAnalysis({ keywords }) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
          <Search className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">ATS Keyword Analysis</h3>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Keyword</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Recommendation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
            {keywords.map((entry) => {
              const statusColors = {
                Found: 'bg-emerald-100 text-emerald-700',
                Missing: 'bg-red-100 text-red-700',
                Weak: 'bg-amber-100 text-amber-700',
              };

              return (
                <tr key={entry.keyword} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">{entry.keyword}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[entry.status]}`}>
                      {entry.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{entry.recommendation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-emerald-50 p-4">
          <div className="flex items-center gap-2 text-emerald-700">
            <ArrowUpRight className="h-4 w-4" />
            <span className="font-semibold">Keywords found</span>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900">{keywords.filter((item) => item.status === 'Found').length}</p>
        </div>
        <div className="rounded-2xl bg-red-50 p-4">
          <div className="flex items-center gap-2 text-red-700">
            <CircleDashed className="h-4 w-4" />
            <span className="font-semibold">Missing</span>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900">{keywords.filter((item) => item.status === 'Missing').length}</p>
        </div>
        <div className="rounded-2xl bg-amber-50 p-4">
          <div className="flex items-center gap-2 text-amber-700">
            <ArrowUpRight className="h-4 w-4" />
            <span className="font-semibold">Could be strengthened</span>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900">{keywords.filter((item) => item.status === 'Weak').length}</p>
        </div>
      </div>
    </section>
  );
}
