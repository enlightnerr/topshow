"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ item, index }) {
  return (
    <Link href={`/${item.media_type}/${item.id}`}>
      <motion.div
        className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.01 }}
      >
        <div className="relative w-full aspect-[2/3]">
          {item.poster_path ? (
            <Image
              src={TMDB_IMAGE_BASE + item.poster_path}
              alt={item.title || item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 250px"
            />
          ) : (
            <div className="bg-gray-600 w-full h-full flex items-center justify-center text-sm text-white">
              No Image
            </div>
          )}
        </div>

        <div className="p-3 flex-grow flex items-center justify-center">
          <p className="text-center text-sm sm:text-base font-medium line-clamp-2">
            {item.title || item.name}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
