import { useState } from 'react';

export default function ResumeUpload({ onFileSelect, isLoading, error }) {
  const [fileName, setFileName] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
      // For TXT files, you can extract text here if you want.
      // But for now, let's just send file to backend for all formats.
    }
  }

  return (
    <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center relative">
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        className="hidden"
        id="resume-upload"
        disabled={isLoading}
      />
      <label
        htmlFor="resume-upload"
        className={`cursor-pointer text-blue-600 hover:underline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {fileName ? `Selected: ${fileName}` : 'Click to upload resume (PDF/DOC/TXT)'}
      </label>

      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold">
          Loading...
        </div>
      )}

      {error && (
        <p className="text-red-400 mt-2">{error}</p>
      )}
    </div>
  );
}
