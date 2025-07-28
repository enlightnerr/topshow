import VerticalSideBySideReelRight from "@/components/verticalScroller/new";

export default function HomePage() {
  return (
    <main className="relative h-screen flex bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Left content */}
      <section className="flex-1 p-16 z-10">
        <h1 className="text-5xl font-bold mb-4">TopShow 🎬</h1>
        <p className="text-lg max-w-xl">
          Explore movies in motion with stunning visual reels — updated live
          from TMDB.
        </p>
      </section>

      {/* Right-side reels */}
      <VerticalSideBySideReelRight />
    </main>
  );
}
