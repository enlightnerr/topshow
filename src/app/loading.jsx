"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="space-y-4 w-[300px]">
        {/* Image shimmer */}
        <div className="w-full h-40 rounded-md shimmer bg-gray-300" />

        {/* Title shimmer */}
        <div className="w-3/4 h-6 rounded shimmer bg-gray-300" />

        {/* Subtitle shimmer */}
        <div className="w-full h-4 rounded shimmer bg-gray-200" />
        <div className="w-5/6 h-4 rounded shimmer bg-gray-200" />
        <div className="w-2/3 h-4 rounded shimmer bg-gray-200" />
      </div>
    </div>
  );
}
