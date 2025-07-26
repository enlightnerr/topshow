"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProfileSection({ user }) {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8">
        {/* Avatar */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <Image
            src={user.avatar || "/default-avatar.png"}
            alt="User Avatar"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="flex-1 mt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {user.email}
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="text-zinc-700 dark:text-zinc-300">
              <strong>Favorite Genres:</strong>{" "}
              {user.favoriteGenres?.join(", ") || "Not set"}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              <strong>Watchlist:</strong> {user.watchlistCount} titles
            </p>
          </div>
        </div>

        {/* Edit button */}
        <div className="mt-4 sm:mt-0">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Edit
          </button>
        </div>
      </div>
    </motion.div>
  );
}
