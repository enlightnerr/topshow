// app/media/[media_type]/[id]/page.jsx

import MediaDetail from "./MediaDetail";

export default async function MediaDetailPage({ params }) {
  const { media_type, id } = params;

  if (!["movie", "tv"].includes(media_type)) {
    return <div className="text-red-600">Invalid media type.</div>;
  }

  const url = `https://api.themoviedb.org/3/${media_type}/${id}`;
  let mediaData = null;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    if (!res.ok) throw new Error("API error");

    mediaData = await res.json();
  } catch (err) {
    console.error("TMDB Fetch Error:", err.message);
    return <div className="text-red-500">Failed to load media.</div>;
  }

  return <MediaDetail mediaData={mediaData} mediaType={media_type} />;
}
