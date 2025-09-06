import { motion } from "framer-motion";

export default function TextGrab() {
  const words = ["Battle.", "Vote.", "Discover.", "Top Playlists."];

  return (
    <div className="flex flex-col space-y-3 justify-center">
      {words.map((word, index) => (
        <motion.h1
          key={word}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.4, type: "spring", stiffness: 120 }}
          className="text-9xl md:text-8xl font-extrabold text-white uppercase"
         >
          {word}
        </motion.h1>
      ))}
      <p className = "mt-4 text-xl text-gray-300">
        Discover the hottest playlists, vote for your favorites, and see what’s trending now!
      </p>
    </div>
  );
}