import { FileText, UploadCloud, X } from 'lucide-react';

export default function ResumeUploader({ file, onFileSelect, onRemoveFile }) {
  const handleInputChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
    event.target.value = '';
  };

  const onDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-2xl font-bold text-slate-900">Upload Your Resume</h3>
      <p className="mt-2 text-sm text-slate-600">Upload your latest resume in PDF or DOCX format.</p>

      {!file ? (
        <label
          className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center transition hover:border-brand-300 hover:bg-brand-50/40"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            aria-label="Upload resume"
            onChange={handleInputChange}
          />

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
            <UploadCloud className="h-7 w-7 text-brand-600" />
          </div>
          <p className="mt-4 text-base font-semibold text-slate-800">Drag & drop your resume here</p>
          <p className="mt-2 text-sm text-slate-500">or browse files</p>
          <p className="mt-4 text-xs text-slate-500">PDF or DOCX • Max 5 MB</p>
        </label>
      ) : (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{file.name}</p>
                <p className="text-sm text-slate-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onRemoveFile}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 transition hover:text-red-500"
              aria-label="Remove uploaded file"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
