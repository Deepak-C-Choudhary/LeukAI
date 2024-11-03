import React from "react";

export const SkeletonText = ({ lines = 1, className = "" }) => {
  return (
    <div
      className={`space-y-2 ${className}`}
      role="status"
      aria-label="Loading content"
    >
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
          style={{ width: `${Math.random() * 30 + 70}%` }}
        />
      ))}
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div
      className="border dark:border-gray-700 rounded-lg p-4 space-y-4"
      role="status"
      aria-label="Loading card"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6" />
      </div>
    </div>
  );
};
