"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TMDB_API_URL = "https://api.themoviedb.org/3/movie/popular";
const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const VerticalReelRight = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(TMDB_API_URL, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching TMDB movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className=" w-1/3 overflow-hidden">
      <motion.div
        className=" w-full"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...movies, ...movies].map((movie, idx) => (
          <div
            key={`${movie.id}-${idx}`}
            className="flex items-center gap-3 p-3 transition"
          >
            <img
              src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-68 rounded-lg shadow-lg"
            />
            {/* <div className="text-sm font-medium text-white">{movie.title}</div> */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalReelRight;
