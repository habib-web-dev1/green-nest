import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div
          className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-emerald-500 rounded-full animate-spin"
          role="status"
          aria-live="polite"
          aria-label="Loading content"
        >
          <span className="sr-only">Loading...</span>
        </div>

        <p className="mt-4 text-lg font-medium text-emerald-700">
          Nesting your content...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
