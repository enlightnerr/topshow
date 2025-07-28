"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TMDB_TRENDING_URL = "https://api.themoviedb.org/3/trending/all/week";
const TMDB_TV_ON_AIR_URL = "https://api.themoviedb.org/3/tv/on_the_air";
const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const VerticalSideBySideReelRight = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingRes, topRatedRes] = await Promise.all([
          fetch(TMDB_TRENDING_URL, {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }),
          fetch(TMDB_TV_ON_AIR_URL, {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }),
        ]);

        const trendingData = await trendingRes.json();
        const topRatedData = await topRatedRes.json();

        setTrendingMovies(trendingData.results || []);
        setTopRatedMovies(topRatedData.results || []);
      } catch (error) {
        console.error("TMDB fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const ScrollColumn = ({ movies, reverse = false }) => (
    <div className="relative w-full h-1/2 sm:h-full sm:w-1/2 overflow-hidden">
      <motion.div
        className={`absolute top-0 left-0 w-full flex flex-col ${
          reverse ? "animate-scroll-down" : "animate-scroll-up"
        }`}
      >
        {[...movies, ...movies].map((movie, idx) => (
          <div
            key={`${movie.id}-${idx}`}
            className="flex items-center gap-2 p-2 sm:p-3 hover:bg-black/70"
          >
            <img
              src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-40 sm:w-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="fixed top-0 right-0 h-screen w-full sm:w-1/3 flex flex-col sm:flex-row bg-black z-20">
      <ScrollColumn movies={trendingMovies} />
      <ScrollColumn movies={topRatedMovies} reverse />
    </div>
  );
};

export default VerticalSideBySideReelRight;
