export default function JobDescription({ value, onChange, charCount, isDisabled }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-2xl font-bold text-slate-900">Job Description</h3>
      <p className="mt-2 text-sm text-slate-600">Paste the job description you want to apply for.</p>

      <div className="mt-6">
        <label htmlFor="job-description" className="sr-only">
          Job description
        </label>
        <textarea
          id="job-description"
          value={value}
          onChange={onChange}
          className="h-72 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
          placeholder="Paste the job description here..."
          aria-label="Job description"
        />
        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>Paste a job description to compare with your resume.</span>
          <span>{charCount} chars</span>
        </div>
      </div>

      <button
        type="button"
        disabled={isDisabled}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-violet-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        Analyze Match
      </button>
    </div>
  );
}
