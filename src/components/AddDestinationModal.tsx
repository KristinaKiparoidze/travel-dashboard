"use client";

import { useState } from "react";
import { fetchUnsplashImage } from "@/lib/unsplash";
import type { Destination } from "@/stores/useTravelStore";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (destination: Omit<Destination, "id" | "visited">) => void;
};

export default function AddDestinationModal({ isOpen, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Use existing Unsplash utility function
      const imageUrl = await fetchUnsplashImage(name.trim());

      onAdd({
        name: name.trim(),
        country: country.trim(),
        image: imageUrl,
      });

      // Reset form
      setName("");
      setCountry("");
      onClose();
    } catch (err) {
      setError("Failed to fetch image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setCountry("");
    setError("");
    onClose();
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add New Destination
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
            aria-label="Close modal"
            type="button"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="destination-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Destination Name *
            </label>
            <input
              id="destination-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Paris, Tokyo, New York"
              required
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="destination-country"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Country *
            </label>
            <input
              id="destination-country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g., France, Japan, USA"
              required
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || !name.trim() || !country.trim()}
              className="flex-1 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Adding...
                </span>
              ) : (
                "Add Destination"
              )}
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          * Image will be auto-fetched from Unsplash • Changes reset on page
          reload
        </p>
      </div>
    </div>
  );
}
