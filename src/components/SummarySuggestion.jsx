import { Copy, Sparkles } from 'lucide-react';

export default function SummarySuggestion({ text }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy summary:', error);
    }
  };

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Suggested Professional Summary</h3>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <Copy className="h-4 w-4" />
          Copy
        </button>
      </div>

      <p className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 to-brand-600 p-5 text-base leading-7 text-slate-100">
        “{text}”
      </p>
    </section>
  );
}
