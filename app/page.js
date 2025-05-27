"use client";

import { useState } from 'react';
import ResumeUpload from '../components/ResumeUpload';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleFileSelect(file) {
    setSelectedFile(file);
    setError(null);
    setIsLoading(true);

    // Simulate backend call for demo — replace with actual API call later
    setTimeout(() => {
      setIsLoading(false);
      // You can update state here with backend response after parsing
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold">AI Resume Screening</h1>

      <ResumeUpload
        onFileSelect={handleFileSelect}
        isLoading={isLoading}
        error={error}
      />

      {selectedFile && !isLoading && (
        <div className="mt-4 p-4 border rounded bg-gray-800 max-w-xl">
          <p><strong>Filename:</strong> {selectedFile.name}</p>
          <p><strong>Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB</p>
          <p><strong>Type:</strong> {selectedFile.type || 'N/A'}</p>
          <p className="italic text-gray-400 mt-2">File will be processed on backend for parsing.</p>
        </div>
      )}
    </div>
  );
}
