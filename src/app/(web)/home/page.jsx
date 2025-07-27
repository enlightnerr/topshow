import MediaCard from "./MediaCard";

export default async function HomePage() {
  let data = [];

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/day",
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    );

    if (response.ok) {
      const jsonData = await response.json();
      data = jsonData.results || [];
    }
  } catch (error) {
    console.error("TMDB API call failed:", error.message);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="py-6 px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
          🔥 Trending All Day!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data.map((item, index) => (
            <MediaCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
