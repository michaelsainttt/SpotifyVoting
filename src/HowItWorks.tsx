import { motion } from "framer-motion";
import { Music, Vote, Crown, Tag, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Music,
    title: "Submit Your Playlist",
    description: "Share your favorite playlists and let others vote.",
  },
  {
    icon: Vote,
    title: "Vote in Real Time",
    description: "Watch playlists climb the leaderboard instantly.",
  },
  {
    icon: Crown,
    title: "Live Leaderboard",
    description: "See which playlists are trending right now.",
  },
  {
    icon: Tag,
    title: "Hashtag Discovery",
    description: "Explore playlists by mood, genre, or vibe.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center mb-16">
        Why RhythmRank?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 border border-green-700/40 rounded-2xl p-8 shadow-lg hover:shadow-green-600/30 hover:-translate-y-2 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20 mb-4">
                <Icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}