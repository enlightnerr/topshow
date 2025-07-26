// app/media/[media_type]/[id]/MediaDetail.jsx

"use client";

import { motion } from "motion/react";

export default function MediaDetail({ mediaData, mediaType }) {
  const {
    title,
    name,
    overview,
    genres = [],
    vote_average,
    release_date,
    first_air_date,
    tagline,
    runtime,
    episode_run_time,
    number_of_seasons,
    number_of_episodes,
    status,
    spoken_languages = [],
    homepage,
    poster_path,
    backdrop_path,
  } = mediaData;

  const displayTitle = title || name;
  const displayDate = release_date || first_air_date;
  const displayRuntime = runtime || (episode_run_time && episode_run_time[0]);

  const posterURL = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/fallback-poster.jpg";

  const backdropURL = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : "/fallback-backdrop.jpg";

  console.log(backdropURL);

  return (
    <div className="media-detail__container relative p-4">
      <div className="movie-image_backdrop__container relative w-full rounded-2xl overflow-hidden shadow h-64 sm:h-96 md:h-[30rem] bg-violet-950">
        {backdrop_path ? (
          <>
            <img
              src={backdropURL}
              alt={`${displayTitle} backdrop`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/60" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center ">
            No backdrop available
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mt-6 flex flex-col md:flex-row gap-8"
      >
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={posterURL}
            alt={displayTitle}
            className="rounded-lg shadow-lg w-44 sm:w-56 md:w-64"
          />
        </div>

        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">
            {displayTitle}
          </h1>
          {tagline && <p className="italic ">"{tagline}"</p>}
          <p className="">{overview}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base  mt-4">
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Release:</strong> {displayDate}
            </p>
            {displayRuntime && (
              <p>
                <strong>Runtime:</strong> {displayRuntime} min
              </p>
            )}
            {number_of_seasons && (
              <p>
                <strong>Seasons:</strong> {number_of_seasons}
              </p>
            )}
            {number_of_episodes && (
              <p>
                <strong>Episodes:</strong> {number_of_episodes}
              </p>
            )}
            <p>
              <strong>Rating:</strong> {vote_average?.toFixed(1)}
            </p>
            {spoken_languages.length > 0 && (
              <p>
                <strong>Languages:</strong>{" "}
                {spoken_languages.map((l) => l.english_name).join(", ")}
              </p>
            )}
            {homepage && (
              <p>
                <strong>Homepage:</strong>{" "}
                <a
                  href={homepage}
                  className="underline text-blue-300"
                  target="_blank"
                >
                  Visit
                </a>
              </p>
            )}
            {genres.length > 0 && (
              <p className="col-span-2">
                <strong>Genres:</strong> {genres.map((g) => g.name).join(", ")}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
