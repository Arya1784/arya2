import { useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeUploader from './components/ResumeUploader';
import JobDescription from './components/JobDescription';
import MatchScore from './components/MatchScore';
import ScoreBreakdown from './components/ScoreBreakdown';
import SkillsSection from './components/SkillsSection';
import KeywordAnalysis from './components/KeywordAnalysis';
import ResumeImprovements from './components/ResumeImprovements';
import SummarySuggestion from './components/SummarySuggestion';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import { mockAnalysis } from './data/mockAnalysis';

const MAX_FILE_SIZE_MB = 5;

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isAnalyzeDisabled = !uploadedFile || jobDescription.trim().length === 0;

  const handleFileSelect = (file) => {
    const isValidType = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'].includes(file.type) || /\.(pdf|doc|docx)$/i.test(file.name);
    const isValidSize = file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;

    if (!isValidType) {
      setError('Please upload a valid PDF or DOCX file.');
      return;
    }

    if (!isValidSize) {
      setError('File exceeds the 5 MB limit. Please select a smaller resume.');
      return;
    }

    setError('');
    setUploadedFile(file);
  };

  const handleAnalyze = () => {
    if (isAnalyzeDisabled) {
      return;
    }

    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setIsLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setUploadedFile(null);
    setJobDescription('');
    setAnalysis(null);
    setIsLoading(false);
    setError('');
  };

  const charCount = useMemo(() => jobDescription.length, [jobDescription]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />

      <main id="analyzer" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Analyzer</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Resume Match Analysis</h2>
          </div>

          {analysis && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Reset Analysis
            </button>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ResumeUploader
            file={uploadedFile}
            onFileSelect={handleFileSelect}
            onRemoveFile={() => setUploadedFile(null)}
          />

          <JobDescription
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            charCount={charCount}
            isDisabled={isAnalyzeDisabled}
          />
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleAnalyze}
            disabled={isAnalyzeDisabled || isLoading}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-violet-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Sparkles className="h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Match'
            )}
          </button>
        </div>

        {isLoading && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-brand-500 to-violet-500" />
              <div className="space-y-2">
                <p className="text-lg font-semibold text-slate-900">Scanning resume against the role...</p>
                <p className="text-sm text-slate-500">Checking skills, keywords, and experience alignment.</p>
              </div>
            </div>
          </div>
        )}

        {analysis && !isLoading && (
          <div className="mt-10 space-y-8">
            <MatchScore score={analysis.score} summary={analysis.summary} />
            <ScoreBreakdown analysis={analysis} />
            <SkillsSection matchingSkills={analysis.matchingSkills} missingSkills={analysis.missingSkills} />
            <KeywordAnalysis keywords={analysis.keywordAnalysis} />
            <ResumeImprovements improvements={analysis.improvements} />
            <SummarySuggestion text={analysis.summaryText} />

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Matching Projects / Experience</h3>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {analysis.projectMatches.map((project) => (
                  <div key={project.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-lg font-semibold text-slate-900">{project.name}</h4>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        {project.match}%
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-50 to-violet-50 p-6 shadow-soft">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Final Recommendation</p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-900">Your Resume Is Almost Ready</h3>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                    <span className="rounded-full bg-white px-3 py-2 font-medium">Current Score: {analysis.score}%</span>
                    <span className="rounded-full bg-white px-3 py-2 font-medium">Potential Score: {analysis.potentialScore}%</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{analysis.recommendation}</p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
                >
                  Improve My Resume
                </button>
              </div>
            </section>
          </div>
        )}
      </main>

      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
